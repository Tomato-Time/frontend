import React from "react";
// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import apiClient from "../services/apiClient"
import "./loginForm.css";

export default function Login() {

return (
      <div className="Login">
      <div className="card">
        
      <div className="logo">
    <div>
      <img src="/images/F4Y_landscape.png" alt="Focus 4 You logo"/>

        <h2>Log In</h2>

      <div className="form">
        <div className="input-field">
          <input
            type="email"
            name="email"
            placeholder="Email Address "
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button className="btn" >
          Log In
        </button>
      </div>

      <div className="footer">
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
    </div>
  </div>
</div>
)
}

