import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { InteractiveWelcome, Welcome } from "./WelcomeComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome />
    <InteractiveWelcome />
  </StrictMode>
);
