// import { Link, useParams, useLocation } from "react-router-dom";
// import "./index.css";
// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Navigation() {
//     const links = ["home", "search", "login", "profile", "about", "contact"];
//     const { pathname } = useLocation();

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-edit ">
//             <a className="navbar-brand logo-edits" href="#/FoodPilot/about">FoodPilot</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link cr-co" href="http://localhost:3000/#/FoodPilot/home">Home </a>
//                     </li>
//                     <li className="nav-item active">
//                         <a className="nav-link cr-co" href="http://localhost:3000/#/FoodPilot/search">Search </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="http://localhost:3000/#/FoodPilot/login">LogIn/SignUp</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="http://localhost:3000/#/FoodPilot/profile">Profile</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="http://localhost:3000/#/FoodPilot/about">About</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="http://localhost:3000/#/FoodPilot/contact">Contact</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navigation;

import { Link, useLocation } from "react-router-dom";
import "./index.css";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as client from "../profile/client";
import { Roles } from '../login/roles';
import { setAccount } from '../login/accountReducer';

function Navigation() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const { pathname } = useLocation();
    var account = useSelector((state) => state.accountReducer.account);
    const dispatch = useDispatch();

    const signout = async () => {
        const status = await client.signout();
        dispatch(setAccount({ username: "Anonymous", role: Roles.ANONYMOUS }));
      };

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-edit">
            <Link className="navbar-brand logo-edits" to="/FoodPilot/">FoodPilot</Link>
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarSupportedContent"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link className="nav-link cr-co" to="/FoodPilot/home">Home </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link cr-co" to="/FoodPilot/search">Search </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/FoodPilot/login">LogIn/SignUp</Link>
                    </li>
                    {/* <profileDropdownItems 
                        isLoggedIn={account.username == "Anonymous"}
                    /> */}
                    <li className="nav-item active">
                        <div class="dropdown dropdown-margin">
                            <a class="btn-profile dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </a>
                                <ul class="dropdown-menu">
                                    {account.username != "Anonymous" && (
                                        <div>
                                            <li><Link className="dropdown-item" to={`/FoodPilot/profile/${account._id}`}>Profile</Link></li><li><Link className="dropdown-item" to={`/FoodPilot/profile/edit/${account._id}`}>Edit Profile</Link></li><li><Link
                                                className="dropdown-item dropdown-items"
                                                to="/FoodPilot/home"
                                                onClick={signout}>
                                                Log Out
                                                </Link>
                                            </li>
                                        </div>
                                    )}
                                    {account.username == "Anonymous" && (
                                        <li><Link className="dropdown-item" to="/FoodPilot/login">Log in</Link></li>
                                    )}
                                </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/FoodPilot/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/FoodPilot/contact">Contact</Link>
                    </li>
                    
                </ul>
                {account && (
                    <Link className="nav-link user" to="/FoodPilot/profile">Hi, {account.username}</Link>
                )}
            </div>
        </nav>
    );
}

export default Navigation;
