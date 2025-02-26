import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter initialValue={10} incrementAmount={2} />
    </div>
  );
}

export default App;
