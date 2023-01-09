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
import AddElectricStation from "./pages/AddElectricStation";
import UpdateStation from "./pages/UpdateStation";
import UpdateUser from "./pages/UpdateUser";

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
        path: "/ecoMobility/users/updateUser/:email",
        element: <UpdateUser />,
      },
      {
        path: "/ecoMobility/stations",
        element: <Stations />,
      },
      {
        path: "/ecoMobility/stations/electricStations",
        element: <ElectricStations />,
      },
      {
        path: "/ecoMobility/stations/electricStations/addElectricStation",
        element: <AddElectricStation />,
      },
      {
        path: "/ecoMobility/stations/electricStations/updateStation/:id",
        element: <UpdateStation />,
      },
      {
        path: "/ecoMobility/stations/bikeStations",
        element: <BikeStations />,
      },
      {
        path: "/ecoMobility/home",
        element: <Home />,
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
