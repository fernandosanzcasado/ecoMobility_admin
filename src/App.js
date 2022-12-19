import React from "react";
import "./App.css";

import Users from "./pages/Users";
import Stations from "./pages/Stations";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ElectricStations from "./pages/ElectricStations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
      {
        path: "/stations/electricStations",
        element: <ElectricStations />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
