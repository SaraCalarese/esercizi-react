// src/App.js
import React from "react";
import Colors from "./List";

const colorArray = [
  { id: 1, name: "Red" },
  { id: 2, name: "Green" },
  { id: 3, name: "Blue" },
];

function App() {
  return (
    <div className="App">
      <h1>Color List</h1>
      <Colors colors={colorArray} />
    </div>
  );
}

export default App;
