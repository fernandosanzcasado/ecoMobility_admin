import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./NavBar.css";

import { useTranslation } from "react-i18next";
import "../i18n.js";
import axios from "axios";

import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

function NavBar() {
  const { t, i18n } = useTranslation();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  async function logout() {
    try {
      console.log("logout");
      const result = await axios.post(
        `http://${process.env.REACT_APP_BASE_URL}/api/v2/users/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log("Error" + error);
      alert("Error logout");
    }
  }

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/ecoMobility/home"
            className="navbar-logo"
            onClick={closeMenu}
          >
            ecoMobility <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/ecoMobility/home"
                className="nav-links"
                onClick={closeMenu}
              >
                {t("NavBar.Home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ecoMobility/users"
                className="nav-links"
                onClick={closeMenu}
              >
                {t("NavBar.Users")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ecoMobility/stations"
                className="nav-links"
                onClick={closeMenu}
              >
                {t("NavBar.Stations")}
              </Link>
            </li>
            <li className="nav-item">
              <Button
                mode="contained"
                onClick={() => {
                  console.log("Entro y cumplo el primer check");
                  handleLogout();
                }}
              >
                {t("NavBar.Logout")}
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
