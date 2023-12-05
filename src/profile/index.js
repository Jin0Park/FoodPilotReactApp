import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as client from "./client";
import { useNavigate, Link, useParams } from "react-router-dom";

//import mongoose from "mongoose";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

function Profile() {
    var profilePic = require('../../src/images/profile.png');
    const { id } = useParams();
    const [account, setAccount] = useState(null);

    const [accountFirstName, setAccountFirstName] = useState([]);
    const [accountLastName, setAccountLastName] = useState([]);
    const [accountEmail, setAccountEmail] = useState([]);
    const [accountZipCode, setAccountZipCode] = useState([]);

    const findUserById = async (id) => {
    //   const user = await client.findUserById(id);
      const user = await client.findUserById("6557fcefa11aca2377083760");
    //   account = user;
    //   setAccount(user);
        setAccountFirstName(user.firstName);
        setAccountLastName(user.lastName);
        setAccountEmail(user.email);
        setAccountZipCode(user.zipCode);
    };
    // const [currentUser, setCurrentUser] = useState(null);
    // const fetchUser = async () => {
    //   const user = await client.account();
    //   setCurrentUser(user);
    // };




    const navigate = useNavigate();
    const fetchAccount = async () => {
      const account = await client.account();
      console.log(account);
      setAccount(account);
    };
    // const save = async () => {
    //   await client.updateUser(account);
    //   console.log(account);
    // };
    // const signout = async () => {
    //   console.log("logout");
  
    //   await client.signout();
    //   navigate("/FoodPilot/about");
    // };
  
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const data = await client.findUserById("6557fcefa11aca2377083754");
    //         setAccountFirstName(data.firstName);
    //         setAccountLastName(data.lastName);
    //         setAccountEmail(data.email);
    //         setAccountZipCode(data.zipCode);

    //       } catch (error) {
    //         console.error('Error fetching user data:', error);
    //       }
    //     };
    
    //     fetchData();
    //     //fetchUser();
    // }, []);

    useEffect(() => {
        findUserById('6557fcefa11aca2377083760');
        // return the below after you receive id from signin
        // if (id) {
        //   findUserById(id);
        // } else {
        //   fetchAccount();
        // }
      }, []);
    
    return (
        <div>
        {/* {account && ( */}
        {accountFirstName && (
            <header className="profile-header">
            <div className="profile-content">
                <div className="row">
                    <div className="profile-personal-image col-sm-1">
                        <section className="photo_size" id="html">
                            <img style={{ width: 150, height: 150 }} src={profilePic} />
                        </section>
                    </div>
                    <div className="profile-personal-info col-sm-10">
                        <span>
                            <b>{<b>{accountFirstName} {accountLastName}</b>}</b><br/>{<b>{accountEmail}</b>}<br/>{<b>{accountZipCode}</b>}
                        </span>
                        {/* <b>{account.firstName}</b> */}
                    </div>
                </div>
            </div>
            <div className="profile-bookmark-info mt-5">
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

{/* `            ONLY SHOW WHEN USER IS CURRENT USER` */}
            <Link
              key={"edit"}
              to={'/FoodPilot/profile/edit'}
              className="btn btn-success button edit-button mt-5 me-2">
                Edit Profile
            </Link>

            {/* ONLY SHOW WHEN USER IS CURRENT AND IS ADMIN */}
            <Link
              key={"list"}
              to={'/FoodPilot/admin/users'}
              className="btn btn-warning button edit-button mt-5 me-2">
                Profile List
            </Link>
            
          </header>
        )
        }
        </div>
    )
};

export default Profile;