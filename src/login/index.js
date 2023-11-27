import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";
import * as client from "./client";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const dayOptions = [];
  for (let i = 1; i <= 31; i++) {
    dayOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const yearOptions = [];
  for (let i = 1901; i <= 2023; i++) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>{isRegister ? 'Register': 'Login'}</h2>
        <div className="input-container">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
        {isRegister && (
          <div>
            <div className="input-container">
              <input type="text" id="first-name" placeholder="First Name" />
              <input type="text" id="last-name" placeholder="Last Name" />
              <input type="text" id="email" placeholder="Email" />
              <input type="text" id="zip-code" placeholder="Zip Code" />
              <input type="text" id="phone" placeholder="Phone" />
            </div>
            <div className="role-container">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="AdminRole" />
                <label className="form-check-label" for="AdminRole">
                  Admin
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="SearchRole" checked />
                <label className="form-check-label" for="SearchRole">
                  Search
                </label>
              </div>
            </div>
          </div>
        )}
        {!isRegister && (
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary login"
              onClick={() => { setIsRegister(true); }}
            >
              Register</button>
            <button type="submit" className="btn btn-primary login">Login</button>
          </div>
        )}
        {isRegister && (
          <div className="button-container">
            <button type="submit" className="btn btn-success login">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}
export default Login;

export function constructLoginJson(username, password, roles) {
  return JSON.stringify({
    "username": username,
    "password": password,
    "roles": roles,
  });
}
