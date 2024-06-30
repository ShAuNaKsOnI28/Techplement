import React, { useEffect, useState } from "react";
import axios from "axios";
import "./QuoteDisplay.css";
const QuoteDisplay = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quote")
      .then((response) => setQuote(response.data));
  }, []);
  return (
    <div className="quote-display">
      <p className="quote-text">{quote.text}</p>
      <p className="quote-author">{quote.author}</p>
    </div>
  );
};

export default QuoteDisplay;