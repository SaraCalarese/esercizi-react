import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext"; // Importiamo il contesto

const Hello = () => {
  const { language, setLanguage } = useContext(LanguageContext); // Otteniamo il valore del contesto

  const getMessage = () => {
    switch (language) {
      case "en":
        return "Hello, World!";
      case "it":
        return "Ciao, Mondo!";
      case "es":
        return "¡Hola, Mundo!";
      default:
        return "Hello, World!";
    }
  };

  return (
    <div>
      <h2>{getMessage()}</h2>

      {/* Select per cambiare la lingua */}
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="it">Italian</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default Hello;
