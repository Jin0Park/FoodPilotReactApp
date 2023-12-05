import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    const links = ["home", "search", "login", "profile", "about", "contact"];
    const { pathname } = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-edit ">
            <a className="navbar-brand logo-edits" href="#/FoodPilot/about">FoodPilot</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link cr-co" href="http://localhost:3000/#/FoodPilot/home">Home </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link cr-co" href="http://localhost:3000/#/FoodPilot/search">Search </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/#/FoodPilot/login">LogIn/SignUp</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/#/FoodPilot/profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/#/FoodPilot/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/#/FoodPilot/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;