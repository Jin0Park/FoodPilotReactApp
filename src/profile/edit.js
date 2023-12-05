import { useNavigate, useParams, Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as client from "./client";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

function edit() {
    var profilePic = require('../../src/images/profile.png');

    // const [currentUser, setCurrentUser] = useState({});
    // const fetchUser = async () => {
    //   const user = await client.account();
    //   setCurrentUser(user);
    // };

    // const [accountFirstName, setAccountFirstName] = useState([]);
    // const [accountLastName, setAccountLastName] = useState([]);
    // const [accountEmail, setAccountEmail] = useState([]);
    // const [accountZipCode, setAccountZipCode] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const data = await client.findUserById("123");
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

    return (
        <header className="profile-header">
        <div className="profile-edit-content">
            <div className="col">
            <div className="row-3">
                <div className="center">
                <section className="photo_size" id="html">
                    <img style={{ width: 200, height: 200 }} src={profilePic} />
                </section>
                </div>
            </div>
            <div className="row">
                <div className="input-container">
                    <input type="text" id="first-name" placeholder="First Name" />
                    <input type="text" id="last-name" placeholder="Last Name" />
                    <input type="text" id="email" placeholder="Email" />
                    <input type="text" id="zip-code" placeholder="Zip Code" />
                    <input type="text" id="phone" placeholder="Phone" />
                </div>
            </div>

            </div>
        </div>

        <Link
          key={"cancel"}
          to={'/FoodPilot/profile'}
          className="btn btn-danger button edit-button mt-5 me-2">
            Cancel
        </Link>        
        <Link
          key={"update"}
          to={'/FoodPilot/profile'}
          className="btn btn-success button edit-button mt-5 me-2">
            Update
        </Link>    
        <Link
          key={"change_photo"}
          to={'/FoodPilot/profile'}
          className="btn btn-primary button edit-button mt-5 me-2">
            Change Photo
        </Link>    

        <input className="edit-button mt-5 me-2" type="file" id="image" name="image" value="" required />
      </header>
  );
}


export default edit;