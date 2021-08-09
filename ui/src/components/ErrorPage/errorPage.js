import React from "react";
import {  Link } from "react-router-dom";
import "./errorPage.css";

  
export default function ErrorPage(){

  return(
        <div className="error-message">
          
            <div>
              <img src="/images/404.png" alt="Error: Page Not Found"/>
            </div> 
        
            <div className="links">
              <p>
                Already have an account? <Link to="/login">Log In</Link>
              </p>

              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>

            </div>   


            </div>
        
    )
}