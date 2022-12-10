import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";

export default function Home() {
  return (
    <div className="home-container">
      <Card
        style={{ width: "18rem", background: "#59DE87", marginRight: "8rem" }}
      >
        <Card.Body>
          <Card.Title>Total Users</Card.Title>
          <Card.Text>Number of registered users</Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "18rem", background: "#59DE87", marginRight: "8rem" }}
      >
        <Card.Body>
          <Card.Title>Total electric stations</Card.Title>
          <Card.Text>Number of electric stations</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", background: "#59DE87" }}>
        <Card.Body>
          <Card.Title>Total bike stations</Card.Title>
          <Card.Text>Number of bike stations</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
