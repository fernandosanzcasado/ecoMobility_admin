import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Stations from "./pages/Stations";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <RouterProvider router={router} fallbackElement={<NavBar />} />
    </>
  );
}

export default App;
