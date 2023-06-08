import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import TranslateProvider from "../shared/i18n/core/TranslateProvider.tsx";
import "../shared/assets/styles/_main.scss";
import { store } from "./store.tsx";
import { AppRoutes } from "../routes/AppRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <TranslateProvider>
          <AppRoutes />
      </TranslateProvider>
    </Provider>
  </React.StrictMode>
);
