import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Stations from "./pages/Stations";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/stations" component={Stations} />
          <Route path="/login" component={Login} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
