import React from "react";
import Age from "./Age";
import Message from "./Message";

function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>

      {/* Mostra Age solo se age > 18 */}
      {age > 18 && <Age age={age} />}

      {/* Mostra Age solo se age è presente */}
      {age !== undefined && <Age age={age} />}

      {/* Mostra Age solo se 18 < age < 65 */}
      {age > 18 && age < 65 && <Age age={age} />}

      {/* Mostra Age solo se age > 18 e name è "John" */}
      {age > 18 && name === "John" && <Age age={age} />}

      {/* Mostra il messaggio basato sull'età */}
      <Message age={age} />
    </div>
  );
}

export default Welcome;
