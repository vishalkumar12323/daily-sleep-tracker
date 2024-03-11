import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import "./css/app.css";
import { AuthProvider } from "./authentication/auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
