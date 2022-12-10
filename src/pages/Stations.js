import React from "react";
import "../App.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

export default function Sations() {
  return (
    <div className="stations-container">
      <h1 className="stations-title">STATIONS</h1>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup style={{ marginLeft: "50rem" }} aria-label="First group">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginLeft: "1rem" }} aria-label="Second group">
          <Button variant="secondary">Left</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}
