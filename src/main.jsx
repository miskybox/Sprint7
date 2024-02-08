//main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { AuthProvider } from "./components/AuthContext";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
