import React from "react";
import "../App.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

export default function Users() {
  const handleClick = () => null;

  return (
    <div className="users-container">
      <h1 className="users-title">USERS</h1>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup style={{ marginLeft: "1rem" }} aria-label="Second group">
          <Button
            style={{ background: "#59DE87" }}
            variant="secondary"
            onClick={handleClick}
          >
            Block user
          </Button>
          <Button
            style={{ background: "#59DE87" }}
            variant="secondary"
            onClick={handleClick}
          >
            Update user
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}
