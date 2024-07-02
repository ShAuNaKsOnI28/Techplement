import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [author, setAuthor] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(author);
  };
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Search By Author"
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
