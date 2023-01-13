import React from "react";
import { createRoot, render } from "react-dom/client";
import App from "./src/App";
import "./src/styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
          <App />
);
