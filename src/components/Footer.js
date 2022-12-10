import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Nothing dresses better than a clear conscience
        </p>
        <p className="footer-subscription-text">
          Working for a better future using sostenible transport
        </p>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/home" className="social-logo">
              ecoMobility
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">ecoMobility © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
