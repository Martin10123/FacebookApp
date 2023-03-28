import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./Router";
import { AuthUserProvider, GetPostsProvider } from "./context";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthUserProvider>
        <GetPostsProvider>
          <AppRouter />
        </GetPostsProvider>
      </AuthUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
