import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { PlaceProvider } from "./context/PlaceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlaceProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PlaceProvider>
  </React.StrictMode>
);
