import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FiltersProvider } from "./contexts/FiltersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
