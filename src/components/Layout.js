import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = (props) => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);
export default Layout;
