// Header.jsx
import React from "react";
import SocialIcons from "./SocialIcons";
import StarWarsLogo from "../assets/StarWarsLogo.png";

function Header() {
    return (
        <div className="header">
            <SocialIcons/>
            <div className="title-container">
            <img src={StarWarsLogo} alt="Star Wars Logo" className="title-image" />
            </div>
        </div>
    );
}

export default Header;
