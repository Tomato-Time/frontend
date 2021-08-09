import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../../services/apiClient";
import "./loginForm.css";
import { UserContext } from "../../RoundContext";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // if user is already logged in,
    // redirect them to the timer page
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleOnInputChange = (event) => {
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

    const { data, error } = await apiClient.loginUser({
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
            onChange={handleOnInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-field">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnInputChange}
          />
            {errors.password && (
                <span className="error">{errors.password}</span>
              )}
        </div>

        <button className="btn" 
               onClick={handleOnSubmit}>
          Log In
        </button>
      </div>

      <div className="footer">
        <p>
          Don't have an account? Register <Link to="/register">Here</Link>
        </p>
      </div>
    </div>
    </div>
  </div>
</div>
)
}

