import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WordProvider } from "./context/WordState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WordProvider>
      <App />
    </WordProvider>
  </React.StrictMode>
);
