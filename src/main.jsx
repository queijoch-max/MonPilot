import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./index.css";
import "./styles/theme.css";
import "./styles/globals.css";
import "./styles/tables.css";
import "./styles/buttons.css";
import "./styles/forms.css";
import "./styles/status.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
