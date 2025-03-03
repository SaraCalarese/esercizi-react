import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GithubUser from "./GithubUser.jsx";
import GithubUsers from "./GithubUsers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubUser />
    <GithubUsers />
  </StrictMode>
);
