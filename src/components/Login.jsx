// Login.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "../styles/App.css";
import videoSource from "../assets/StarWarsVideo.mp4";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    playVideo();
  }, []); // Ejecuta playVideo cuando el componente se monte

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(formData);
      setError("");
      navigate("/app");
    } catch (error) {
      setError(error.message);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function playVideo() {
    const video = document.getElementById("login-video");
    video.play();
  }

  return (
    <section>
      <form className="register" onSubmit={handleSubmit}>
        <div className="login">
          <Link to="/">
            <button className="btn btn-outline-warning">Welcome</button>
          </Link>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            required
            placeholder="Email"
            value={formData.email || ""}
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control"
            required
            placeholder="Password"
            value={formData.password || ""}
            name="password"
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <div className="flex flex-col gap-4 mt-4">
          <button
            className="btn btn-outline-info w-24 rounded-full mx-auto"
            type="submit"
          >
            LOGIN
          </button>
          <div className="flex items-center ">
            <div className="border h-0 w-2/4 border-stone-300"></div>
            <div className="text-stone-300 px-4 text-sm font-normal">OR</div>
            <div className="border h-0 w-2/4 border-stone-300"></div>
          </div>
          <div className="mx-auto">
            <Link to="/menu">
              <button
                className="btn btn-outline w-24 rounded-full"
                type="button"
              >
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </form>
      <video
        id="login-video"
        className="video"
        src={videoSource}
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
}

export default Login;
