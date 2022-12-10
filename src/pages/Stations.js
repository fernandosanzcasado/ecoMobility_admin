import React from "react";
import "../App.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

export default function Sations() {
  const handleClick = () => null;

  return (
    <div className="stations-container">
      <h1 className="stations-title">STATIONS</h1>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="First group">
          <Button style={{ background: "#59DE87" }} variant="secondary">
            Electric stations
          </Button>
          <Button style={{ background: "#59DE87" }} variant="secondary">
            Bike stations
          </Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginLeft: "1rem" }} aria-label="Second group">
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
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}
