import React from "react";
import "./App.css";
import QuoteDisplay from "./components/QuoteDisplay";
import QuoteList from "./components/QuoteList";
function App() {
  return (
    <div className="App">
      <h1> Qutote of the day </h1>
      <p> Here is the quote of the day </p>
      <QuoteDisplay />
      <QuoteList />
    </div>
  );
}

export default App;
