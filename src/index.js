import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FiltersProvider } from "./contexts/FiltersContext";
document.body.style = "background: black;";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
