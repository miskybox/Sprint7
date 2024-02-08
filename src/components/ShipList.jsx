// ShipList.jsx
import React, { useContext, useState, useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { StarShipsContext } from "./StarShipsContext";

function ShipList() {
  const { starShips, loadMoreShips } = useContext(StarShipsContext);
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.pageYOffset;
      if (offsetY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid>
      <div className="d-flex flex-wrap">
        {starShips.map((ship, index) => (
          <Card
            key={ship.name}
            className="m-2 ship-card"
            style={{
              width: "18rem",
              backgroundColor: "#000",
              color: "#fff",
              border: "solid #cccccc",
            }}
          >
            <Card.Body>
              <Card.Title>{ship.name}</Card.Title>
              <Card.Text>Model: {ship.model}</Card.Text>
              <Button
                variant="outline-warning"
                onClick={() =>
                  navigate(`/details/${ship.url.split("/").reverse()[1]}`)
                }
              >
                View Details
              </Button>
              {index === starShips.length - 1 && (
                <Button variant="outline-secondary" onClick={loadMoreShips}>
                  View More
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
        {showBackToTop && (
          <Button
            variant="outline-secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </Button>
        )}
      </div>
    </Container>
  );
}

export default ShipList;
