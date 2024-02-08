//Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signup(formData);
      setError("");
      navigate("/menu");
    } catch (error) {
      setError(error.message);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <section>
      <div className="signup">
        <h1>SIGN UP</h1>
        <Link to="/">
          <button className="btn btn-warning">Welcome</button>
        </Link>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input input-bordered border-gray-300 rounded-full"
          required
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        {error && <p className="text-red-600">{error}</p>}
        <input
          type="password"
          className="input input-bordered border-gray-300 rounded-full"
          required
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <div className="flex flex-col gap-4 mt-4">
          <button className="btn btn-info" type="submit">
            SIGNUP
          </button>
          <div className="flex items-center ">
            <div className="border h-0 w-2/4 border-stone-300"></div>
            <div className="text-stone-300 px-4 text-sm font-normal">OR</div>
            <div className="border h-0 w-2/4 border-stone-300"></div>
          </div>
          <div className="mx-auto">
            <Link to="/">
              <button
                className="btn btn-outline w-24 rounded-full"
                type="button"
              >
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Signup;
