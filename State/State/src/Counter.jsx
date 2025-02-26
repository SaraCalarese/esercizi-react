import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  // Funzione per incrementare il contatore
  const increment = () => {
    setCounter((prevCounter) => prevCounter + incrementAmount);
  };

  // Funzione per decrementare il contatore
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - incrementAmount);
  };

  // Funzione per resettare il contatore al valore iniziale
  const reset = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      {/* Commento sulla gestione dello stato */}
      {/*
        Quando chiamiamo setCounter, passiamo una funzione invece di un valore immediato. 
        Questo perché React può accodare più aggiornamenti di stato e, passando una funzione, 
        possiamo sempre usare il valore più aggiornato del contatore (prevCounter). 
        Se invece passassimo direttamente "counter + incrementAmount", potremmo ottenere 
        valori non aggiornati se ci sono più aggiornamenti consecutivi.
      */}
    </div>
  );
}

export default Counter;
