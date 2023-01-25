import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import "./language/i18n.ts";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Global } from "style/style";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <Global />
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
