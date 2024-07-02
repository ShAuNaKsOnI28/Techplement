import axios from "axios";
import React, { useState } from "react";
import "./QuoteList.css";
import SearchBar from "./SearchBar";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);

  const searchQuotes = (author) => {
    axios
      .get(`http://localhost:5000/api/quotes?author=${author}`)
      .then((response) => setQuotes(response.data))
      .catch((error) => console.error("Error fetching quotes:", error));
  };

  return (
    <div className="quote-list">
      <SearchBar onSearch={searchQuotes} />
      <ul>
        {quotes.map((quote) => (
          <li key={quote._id} className="quote-item">
            "{quote.text}" - {quote.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
