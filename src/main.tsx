import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoMatch from "./pages/error/NoMatch";
import App from "./App";
import { PageContextProvider } from "./PageContext";

import "./reset.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NoMatch status={404} />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <PageContextProvider>
        <RouterProvider router={router} />
      </PageContextProvider>
    </React.StrictMode>
  );
} else {
  console.error("Could not find root element");
}
