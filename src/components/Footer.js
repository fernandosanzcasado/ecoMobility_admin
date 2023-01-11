import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import "../i18n.js";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer-container mt-auto">
      <section className="footer-subscription">
        <p className="footer-subscription-heading"> {t("Footer.Quote1")} </p>
        <p className="footer-subscription-text"> {t("Footer.Quote2")}</p>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/ecoMobility/home" className="social-logo">
              ecoMobility
            </Link>
          </div>
          <small class="website-rights">ecoMobility © 2023</small>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
