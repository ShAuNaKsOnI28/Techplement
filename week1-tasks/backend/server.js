const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/quotes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

app.listen(5000, () => console.log("Server started on port 5000"));
