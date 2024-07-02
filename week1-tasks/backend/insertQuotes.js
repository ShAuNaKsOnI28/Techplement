const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shaunaksoni28123:S2h8a1u2n3aks@shaunak.6fkxrnl.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const quoteSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const Quote = mongoose.model("Quote", quoteSchema);

const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
];

Quote.insertMany(quotes)
  .then(() => {
    console.log("Quotes inserted");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
