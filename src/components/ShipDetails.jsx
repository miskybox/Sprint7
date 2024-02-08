//ShipDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "../styles/App.css";

function ShipDetails() {
  const { page } = useParams();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${page}/`)
      .then((response) => response.json())
      .then(setShip);
  }, [page]);

  if (!ship) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ship-details">
      <Card className="custom-card">
        <Row>
          <Col xs={6}>
            <Card.Img
              variant="top"
              src={`https://starwars-visualguide.com/assets/img/starships/${page}.jpg`}
              alt={ship.name}
            />
          </Col>
          <Col xs={6}>
            <Card.Body>
              <h2>{ship.name}</h2>
              <p>Model: {ship.model}</p>
              <p>Manufacturer: {ship.manufacturer}</p>
              <p>Cost in credits: {ship.cost_in_credits}</p>
              <p>Length: {ship.length}</p>
              <p>Max atmosphering speed: {ship.max_atmosphering_speed}</p>
              <p>Crew: {ship.crew}</p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ShipDetails;
