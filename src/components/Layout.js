import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = (props) => (
  <div className="d-flex flex-column min-vh-100">
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);
export default Layout;
