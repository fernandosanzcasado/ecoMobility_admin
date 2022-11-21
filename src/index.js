import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Users from "./pages/Users";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
