import React, { useRef } from "react";

const UncontrolledLogin = () => {
  // Creiamo i riferimenti per gli input
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();

  // Funzione per il login con il DOM API
  const onLogin = (event) => {
    event.preventDefault(); // Per evitare il refresh della pagina
    console.log("Username:", usernameRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Remember me:", rememberRef.current.checked);
  };

  // Funzione per il login con il FormData API
  const loginWithFormData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Usa il form che ha scatenato l'evento
    console.log("Username:", formData.get("username"));
    console.log("Password:", formData.get("password"));
    console.log("Remember me:", formData.get("remember") === "on"); // FormData gestisce i checkbox come 'on' se selezionato
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameRef}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          required
        />
      </div>
      <div>
        <label htmlFor="remember">Remember me:</label>
        <input
          type="checkbox"
          id="remember"
          name="remember"
          ref={rememberRef}
        />
      </div>
      {/* Aggiungiamo i due pulsanti di login */}
      <button type="button" onClick={onLogin}>
        Login (DOM API)
      </button>
      <button type="button" onClick={loginWithFormData}>
        Login (FormData API)
      </button>
    </form>
  );
};

export default UncontrolledLogin;
