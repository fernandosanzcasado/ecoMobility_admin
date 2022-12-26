import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { Button } from "./Button.js";

import { useTranslation } from "react-i18next";
import "../i18n.js";

function NavBar() {
  const { t, i18n } = useTranslation();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo" onClick={closeMenu}>
            ecoMobility <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMenu}>
                {t("NavBar.Home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-links" onClick={closeMenu}>
                {t("NavBar.Users")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stations" className="nav-links" onClick={closeMenu}>
                {t("NavBar.Stations")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">LOGIN</Button>}
        </div>
      </nav>
    </>
  );
}
export default NavBar;
