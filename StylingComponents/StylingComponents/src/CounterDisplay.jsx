// src/CounterDisplay.jsx
import React from "react";

function CounterDisplay({ count }) {
  const counterStyle = {
    fontSize: "24px", // Imposta la dimensione del font
    color: "#333", // Imposta il colore del testo
  };

  return (
    <div style={counterStyle}>
      <p>Current Count: {count}</p>
    </div>
  );
}

export default CounterDisplay;
