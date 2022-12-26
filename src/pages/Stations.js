import React from "react";
import "../App.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Stations() {
  const navigate = useNavigate();
  const handleClickElectric = () => navigate("/stations/electricStations");
  const handleClickBike = () => navigate("/stations/bikeStations");

  return (
    <div className="stations-container">
      <h1 className="stations-title">STATIONS</h1>
      <ButtonGroup aria-label="First group">
        <Button
          style={{ background: "#59DE87" }}
          variant="secondary"
          onClick={handleClickElectric}
        >
          Electric stations
        </Button>
        <Button
          style={{ background: "#59DE87" }}
          variant="secondary"
          onClick={handleClickBike}
        >
          Bike stations
        </Button>
      </ButtonGroup>
    </div>
  );
}
