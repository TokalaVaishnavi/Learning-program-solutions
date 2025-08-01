import React from "react";
import Counter from "./Counter";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Event Handling in React</h1>
      <Counter />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

