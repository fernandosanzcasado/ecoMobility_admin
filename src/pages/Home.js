import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";
import { useTranslation } from "react-i18next";
import "../i18n.js";
import axios from "axios";

import English from "../images/BanderaInglesa.jpg";
import Spanish from "../images/BanderaEspañola.jpg";
import Catalan from "../images/BanderaCatalana.jpg";

export default function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div className="cards-container">
        <Card
          style={{ width: "18rem", background: "#59DE87", marginRight: "8rem" }}
        >
          <Card.Body>
            <Card.Title>{t("Home.Users")}</Card.Title>
            <Card.Text>Number of registered users</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", background: "#59DE87", marginRight: "8rem" }}
        >
          <Card.Body>
            <Card.Title>{t("Home.Electric")}</Card.Title>
            <Card.Text>Number of electric stations</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", background: "#59DE87" }}>
          <Card.Body>
            <Card.Title>{t("Home.Bike")}</Card.Title>
            <Card.Text>Number of bike stations</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="flagsView">
        <img
          className="flags"
          src={English}
          onClick={() => {
            changeLanguage("en");
          }}
        ></img>
        <img
          className="flags"
          src={Spanish}
          onClick={() => {
            changeLanguage("cast");
          }}
        ></img>
        <img
          className="flags"
          src={Catalan}
          onClick={() => {
            changeLanguage("cat");
          }}
        ></img>
      </div>
    </div>
  );
}
