//Welcome.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import videoSource from "../assets/StarWarsVideo.mp4";

function Welcome() {
  const { user } = useAuth();

  useEffect(() => {
    const video = document.getElementById("welcome-video");
    video.play();
  }, []); // Se ejecuta cuando el componente se monta

  return (
    <div className="card" id="welcome">
      <div className="flex flex-col items-center justify-center">
        <Link
          to="/login"
          className="btn btn-outline-warning m-8"
          id="enterButton"
        >
          Go to Login
        </Link>
      </div>
      <video
        id="welcome-video"
        className="video"
        src={videoSource}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

export default Welcome;
