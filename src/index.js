import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";
import Stations from "./pages/Stations";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/stations",
    element: <Stations />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
