import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = () => {
    const rate = 0.011; // Example rate: 1 INR = 0.011 EUR
    const converted = parseFloat(rupees) * rate;
    setEuro(converted.toFixed(2));
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Currency Convertor</h2>
      <label>
        Enter Rupees: &nbsp;
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
      </label>
      <br /><br />
      <button onClick={handleSubmit}>Convert</button>
      <br /><br />
      {euro && <p>Equivalent Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
