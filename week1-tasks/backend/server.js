const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/quotes";

if (!MONGO_URI) {
  console.error("MongoDB URI not set in environment variables");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

const quoteSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const Quote = mongoose.model("Quote", quoteSchema);

app.get("/api/quote", async (req, res) => {
  const quote = await Quote.aggregate([{ $sample: { size: 1 } }]);
  res.json(quote[0]);
});

app.get("/api/quotes", async (req, res) => {
  const { author } = req.query;
  const quotes = await Quote.find({ author: new RegExp(author, "i") });
  res.json(quotes);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
