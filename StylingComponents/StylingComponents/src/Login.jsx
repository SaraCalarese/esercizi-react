// src/Login.jsx
import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const buttonStyle = {
    backgroundColor: password.length < 8 ? "red" : "green", // Cambia il colore in base alla lunghezza
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}

export default Login;
