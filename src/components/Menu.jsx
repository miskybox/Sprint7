// Menu.jsx
import React from "react";
import Header from "../Menu/Header";
import NavBar from "../Menu/NavBar";
import CardContainer from "../Menu/CardContainer";
import "../styles/App.css";

function Menu() {
  return (
    <div className="menu">
      <Header />
      <hr className="divider" />
      <NavBar />
      <hr className="divider" />
      <CardContainer />
    </div>
  );
}

export default Menu;
