import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./QuoteList.css";

const QuoteList = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const searchQuotes = (author) => {
    axios
      .get(`http://localhost:5000/api/quote?author=${author}`)
      .then((response) => setQuote(response.data));
  };
  return (
    <div className="quote-list">
      <SearchBar onSearch={searchQuotes} />
      <ul>
        {quote.map((quote) => (
          <li key={quote._id} className="quote-item">
            "{quote.text}" - {quote.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
