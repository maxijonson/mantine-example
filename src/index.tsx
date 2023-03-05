import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Providers from "./context/providers";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
