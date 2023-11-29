import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as client from "./client";
import { Link, Navigate } from "react-router-dom";

//import mongoose from "mongoose";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

function Profile() {
    
    var profilePic = require('../../src/images/profile.png');

    const [currentUser, setCurrentUser] = useState(null); // [1
    const fetchUser = async () => {
      const user = await client.account();
      setCurrentUser(user);
    };

    const [accountFirstName, setAccountFirstName] = useState([]);
    const [accountLastName, setAccountLastName] = useState([]);
    const [accountEmail, setAccountEmail] = useState([]);
    const [accountZipCode, setAccountZipCode] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await client.findUserById("123");
            setAccountFirstName(data.firstName);
            setAccountLastName(data.lastName);
            setAccountEmail(data.email);
            setAccountZipCode(data.zipCode);

          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchData();
        //fetchUser();
    }, []);
    return (
        <header className="profile-header">
        <div className="profile-content">
            <div className="row">
                <div className="profile-personal-image col-1">
                    <section className="photo_size" id="html">
                        <img style={{ width: 150, height: 150 }} src={profilePic} />
                    </section>
                </div>
                <div className="profile-personal-info col">
                    <h3>{accountFirstName}</h3>
                    <h3 className="space">{accountLastName}</h3>
                    <h3 className='indented'>{accountEmail}</h3>
                    <h3 className="indented">{accountZipCode}</h3>
                </div>
            </div>
        </div>
        <div className="profile-personal-info mt-5">
            <div className="col">
                <div className="row-1 mt-5">
                    <h3>Bookmarked Restaurants</h3>

                </div>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">
                        McDonald's</a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Burger King</a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Taco Bell</a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Chipotle</a>
                    <a href="#" class="list-group-item list-group-item-action">
                        Mod Pizza</a>
                </div>
            </div>
        </div>
      </header>
    )
};

export default Profile;