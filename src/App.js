import React from "react";
import "./App.css";

import Users from "./pages/Users";
import Stations from "./pages/Stations";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ElectricStations from "./pages/ElectricStations";
import BikeStations from "./pages/BikeStations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/ecoMobility",
    element: <Layout />,
    children: [
      {
        path: "/ecoMobility/users",
        element: <Users />,
      },
      {
        path: "/ecoMobility/stations",
        element: <Stations />,
      },
      {
        path: "/ecoMobility/home",
        element: <Home />,
      },
      {
        path: "/ecoMobility/stations/electricStations",
        element: <ElectricStations />,
      },
      {
        path: "/ecoMobility/stations/bikeStations",
        element: <BikeStations />,
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
