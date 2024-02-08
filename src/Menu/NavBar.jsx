// NavBar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StarShipsContext } from "../components/StarShipsContext";
import "../styles/App.css";

function NavBar() {
  const { loadMoreShips } = useContext(StarShipsContext);

  const handleStarshipsClick = () => {
    loadMoreShips(1);
  };

  return (
    <nav className="navbar">
      <div className="centered-buttons">
        <Link to="/" className="btn btn-dark">
          Home
        </Link>
        <button
          className="btn btn-outline-secondary"
          onClick={handleStarshipsClick}
        >
          Starships
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
