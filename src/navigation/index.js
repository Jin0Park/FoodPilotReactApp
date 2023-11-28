import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    const links = ["about", "home", "search", "login", "profile"];
    const { pathname } = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-edit ">
            <a className="navbar-brand logo-edits" href="#/FoodPilot/about">FoodPilot</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {links.map((link, index) => (
                        <li className="nav-item">
                            <Link
                                key={index}
                                to={`/FoodPilot/${link}`}
                                className={`nav-link cr-co ${pathname.includes(link) && "active"}`}>
                                {link[0].toUpperCase() + link.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;