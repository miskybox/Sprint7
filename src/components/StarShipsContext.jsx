// StarShipsContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

export const StarShipsContext = createContext();

export const StarShipsProvider = ({ children }) => {
  const [starShips, setStarShips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialShipsLoaded, setInitialShipsLoaded] = useState(false);
  const { user } = useAuth(); // la función useAuth  proporciona el contexto de autenticación

  useEffect(() => {
    if (user) {
      loadInitialShips();
    }
  }, [user]);

  const loadInitialShips = () => {
    fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setStarShips(data.results);
        setInitialShipsLoaded(true);
      });
  };

  const loadMoreShips = () => {
    let nextPage = currentPage + 1;
    fetch(`https://swapi.dev/api/starships/?page=${nextPage}`)
      .then((response) => response.json())
      .then((data) =>
        setStarShips((prevShips) => [...prevShips, ...data.results])
      )
      .then(() => setCurrentPage(nextPage));
  };

  return (
    <StarShipsContext.Provider
      value={{ starShips, loadMoreShips, initialShipsLoaded }}
    >
      {children}
    </StarShipsContext.Provider>
  );
};
