import React, { createContext, useState } from "react";

// Creiamo il LanguageContext con un valore di default
const LanguageContext = createContext();

// Componente che fornisce il contesto
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Iniziamo con l'inglese

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
