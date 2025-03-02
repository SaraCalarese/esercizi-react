// src/components/Ref.jsx
import React, { useEffect, useRef } from "react";

// FocusableInput
export default function FocusableInput() {
  const inputRef = useRef();

  useEffect(() => {
    // Mettiamo a fuoco l'input appena il componente viene montato
    inputRef.current.focus();
  }, []); // L'effetto viene eseguito solo una volta al montaggio

  return <input ref={inputRef} type="text" placeholder="Focus automatico" />;
}

// FirstMountEffect
export function FirstMountEffect() {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      console.log("Componente montato per la prima volta");
      mountedRef.current = true;
    }
  }, []); // Questo effetto viene eseguito solo una volta

  return <div>Controlla la console per il messaggio!</div>;
}
