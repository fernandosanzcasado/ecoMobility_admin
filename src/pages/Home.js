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

  const [numStations, setNumStations] = React.useState([]);
  const [numUsers, setNumUsers] = React.useState([]);
  const [numBikes, setNumBikes] = React.useState([]);

  React.useEffect(() => {
    async function getNumEstaciones() {
      try {
        const res = await axios.get(
          `http://${process.env.REACT_APP_BASE_URL}/api/v2/estaciones/count`
        );
        setNumStations(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getNumEstaciones();
  }, []);

  React.useEffect(() => {
    console.log(numStations);
  }, [numStations]);

  React.useEffect(() => {
    async function getNumUsers() {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v2/users/admin/getAllUsers/count",
          {
            withCredentials: true,
          }
        );
        setNumUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getNumUsers();
  }, []);

  React.useEffect(() => {
    console.log(numUsers);
  }, [numUsers]);

  React.useEffect(() => {
    async function getNumBikes() {
      try {
        const res = await axios.get(
          `http://${process.env.REACT_APP_BASE_URL}/api/v2/bicing/count`
        );
        setNumBikes(res.data.count);
      } catch (error) {
        console.log(error);
      }
    }
    getNumBikes();
  }, []);

  React.useEffect(() => {
    console.log(numBikes);
  }, [numBikes]);

  return (
    <div>
      <div className="cards-container">
        <Card
          style={{ width: "18rem", background: "#59DE87", marginRight: "8rem" }}
        >
          <Card.Body>
            <Card.Title>{t("Home.Users")}</Card.Title>
            <Card.Text>{numUsers}</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", background: "#59DE87", marginRight: "8rem" }}
        >
          <Card.Body>
            <Card.Title>{t("Home.Electric")}</Card.Title>
            <Card.Text>{numStations}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", background: "#59DE87" }}>
          <Card.Body>
            <Card.Title>{t("Home.Bike")}</Card.Title>
            <Card.Text>{numBikes}</Card.Text>
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
