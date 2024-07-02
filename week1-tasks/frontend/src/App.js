import React from "react";
import "./App.css";
import QuoteDisplay from "./components/QuoteDisplay";
import QuoteList from "./components/QuoteList";

const App = () => {
  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <QuoteDisplay />
      <QuoteList />
    </div>
  );
};

export default App;
