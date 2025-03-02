import React from "react";
import FocusableInput, { FirstMountEffect } from "./Ref"; // Importa entrambi i componenti

const App = () => {
  return (
    <div>
      <h1>FocusableInput e FirstMountEffect</h1>
      <FocusableInput />
      <FirstMountEffect />
    </div>
  );
};

export default App;
