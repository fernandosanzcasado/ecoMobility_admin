import React from "react";
import "../App.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import "../i18n.js";

export default function Stations() {
  const navigate = useNavigate();
  const handleClickElectric = () => navigate("/stations/electricStations");
  const handleClickBike = () => navigate("/stations/bikeStations");

  const { t, i18n } = useTranslation();

  return (
    <div className="stations-container">
      <h1 className="stations-title">{t("Stations.Title")}</h1>
      <ButtonGroup aria-label="First group">
        <Button
          style={{ background: "#59DE87" }}
          variant="secondary"
          onClick={handleClickElectric}
        >
          {t("Stations.Electric")}
        </Button>
        <Button
          style={{ background: "#59DE87" }}
          variant="secondary"
          onClick={handleClickBike}
        >
          {t("Stations.Bike")}
        </Button>
      </ButtonGroup>
    </div>
  );
}
