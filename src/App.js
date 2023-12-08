import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Navigation from "./navigation";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Login from "./login";
import Search from "./search";
import Profile from "./profile";
import ProfileEdit from "./profile/edit";
import UserList from "./profile/list";
import Contact from './contact';


function App() {
    return (
        <HashRouter>
            <div className="d">
                <Navigation />
                <div className="style-bg">
                    <Routes>
                        <Route path="/FoodPilot/" element={<Home />} />
                        <Route path="/FoodPilot/home" element={<Home />} />
                        <Route path="/" element={<Navigate to="/FoodPilot/home" />} />
                        <Route path="/FoodPilot/admin/users" element={<UserList />} />

                        <Route path="/FoodPilot/login" element={<Login />} />
                        <Route path="/FoodPilot/search" element={<Search />} />
                        <Route path="/FoodPilot/profile" element={<Profile />} />
                        <Route path="/FoodPilot/profile/edit" element={<ProfileEdit />} />
                        <Route path="/FoodPilot/about" element={<About />} />
                        <Route path="/FoodPilot/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;