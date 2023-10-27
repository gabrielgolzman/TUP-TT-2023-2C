import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { AuthenticationContextProvider } from "./services/authenticationContext/authentication.context";
import App from "./App";
import { ThemeContextProvider } from "./services/themeContext/theme.context";
import { APIContextProvider } from "./services/apiContext/API.Context";
import { TranslateContextProvider } from "./services/translationContext/translation.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <APIContextProvider>
    <TranslateContextProvider>
      <ThemeContextProvider>
        <AuthenticationContextProvider>
          <App />
        </AuthenticationContextProvider>
      </ThemeContextProvider>
    </TranslateContextProvider>
  </APIContextProvider>
);
