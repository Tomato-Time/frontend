import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../../services/apiClient";
import { UserContext } from "../../RoundContext";
import "./Registration.css";


export default function Registration() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleOnInputChange = (event) => {
    // checking for valid email
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrors((e) => ({ ...e, form: null }));
    // make api call to register user
    const { data, error } = await apiClient.signupUser({
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      password: form.password,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
    }
  };
  return (
    <div className="Signup">
    <div className="card">

    <div className="logo">
    <div className="center">
    <img src="/images/F4Y_landscape.png" alt="Focus 4 You logo"/>
   
      {/* <img src="/images/F4Y_landscape.png" alt="Focus 4 You logo"/> */}

      <h2>Create Account</h2>

      {/* {errors.form && <span className="error">{errors.form}</span>} */}

      <div className="form">
        <div className="input-field">
          <input
            type="first_name"
            name="first_name" 
            placeholder="First Name"
            value={form.first_name}
            onChange={handleOnInputChange}
          />
          {errors.first_name&& (
            <span className="error">{errors.first_name}</span>
          )}
        </div>

        <div className="input-field">
          <input
            type="last_name"
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleOnInputChange}
          />
          {errors.last_name && (
            <span className="error">{errors.last_name}</span>
          )}
        </div>

        <div className="input-field">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleOnInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-field">
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleOnInputChange}
          />
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        <button
          className="btn"
          onClick={handleOnSubmit}
        >
          { "Register"}
        </button>
      </div>

      <p className="topLink"> 
        Don't have an account? <Link className="linkColor" to="/login">Log In</Link>
        </p>
      
         
          <p>
          Lost? Return to <Link className="linkColor" to="/">Home</Link>
          </p>
    </div>
  </div>
  </div>
    </div>
    
  );
}

