import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Components/Counter.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import GithubProfile from "./Components/GitHubProfile.jsx";
import Location from "./Components/Location.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <LoginForm />
    <GithubProfile />
    <Location />
  </StrictMode>
);
