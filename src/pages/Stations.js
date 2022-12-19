import React from "react";
import "../App.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Stations() {
  const handleClick = () => null;

  return (
    <div className="stations-container">
      <h1 className="stations-title">STATIONS</h1>
      <Link to="/stations/electricStations" className="nav-links">
        Home
      </Link>
      {/* <ButtonToolbar aria-label="Toolbar with button groups"> */}
      <ButtonGroup aria-label="First group">
        <Button
          style={{ background: "#59DE87" }}
          variant="secondary"
          onClick={handleClick}
        >
          Electric stations
        </Button>
        <Button style={{ background: "#59DE87" }} variant="secondary">
          Bike stations
        </Button>
      </ButtonGroup>
      {/* <ButtonGroup style={{ marginLeft: "1rem" }} aria-label="Second group">
          <Button
            style={{ background: "#59DE87" }}
            variant="secondary"
            onClick={handleClick}
          >
            Add station
          </Button>
          <Button
            style={{ background: "#59DE87" }}
            variant="secondary"
            onClick={handleClick}
          >
            Delete station
          </Button>
          <Button
            style={{ background: "#59DE87" }}
            variant="secondary"
            onClick={handleClick}
          >
            Update station
          </Button>
        </ButtonGroup> */}
      {/* </ButtonToolbar> */}
    </div>
  );
}
