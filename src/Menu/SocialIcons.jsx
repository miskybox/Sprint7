//SocialIcons.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
 return (
    <div className="social-icons">
      <FontAwesomeIcon className="social-icon" icon={faFacebook} />
      <FontAwesomeIcon className="social-icon" icon={faInstagram} />
      <FontAwesomeIcon className="social-icon" icon={faTwitter} />
      <FontAwesomeIcon className="social-icon" icon={faYoutube} />
    </div>
 );
}

export default SocialIcons;