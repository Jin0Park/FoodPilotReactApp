import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as client from "../profile/client";
import { useNavigate, Link, useParams } from "react-router-dom";
import { setAccount } from '../login/accountReducer';
import { useSelector, useDispatch } from "react-redux";
import { Roles } from '../login/roles';
import * as bookmarkClient from "../bookmark/client";
import * as followsClient from "../follows/client";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

function Profile() {
    var profilePic = require('../../src/images/profile.png');
    var account = useSelector((state) => state.accountReducer.account);
    const dispatch = useDispatch();
    const [bookmarks, setBookmarks] = useState([]);
    const [userFirstName, setUserFirstName] = useState(null);
    const [userLastName, setUserLastName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userZipCode, setUserZipCode] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const { id } = useParams();
    const signout = async () => {
        const status = await client.signout();
        dispatch(setAccount({ username: "Anonymous", role: Roles.ANONYMOUS }));
      };

    const fetchBookmarks = async () => {
        const bookmarks = await bookmarkClient.findRestaurantsThatUserBookmarks(id);
        setBookmarks(bookmarks);
    };

    const fetchUserData = async () => {
        const u = await client.findUserById(id);
        setUserFirstName(u.firstName);
        setUserLastName(u.lastName);
        setUserEmail(u.email);
        setUserZipCode(u.zipCode);
        setUserRole(u.role);
    };

    const deleteBookmark = async (restaurantId) => {
        console.log(restaurantId);
        const status = await bookmarkClient.deleteUserBookmarksRestaurant(id, restaurantId)
    }
    const followUser = async () => {
        const status = await followsClient.userFollowsUser(id);
    };
    const unfollowUser = async (unfollowId) => {
        //console.log("unfollow", unfollowId._id);
        const status = await followsClient.userUnfollowsUser(unfollowId._id);
    };
    const fetchFollowers = async () => {
        const followers = await followsClient.findFollowersOfUser(id);
        //console.log("followers are", followers);
        setFollowers(followers);
    };
    const fetchFollowing = async () => {
        const following = await followsClient.findFollowedUsersByUser(id);
        setFollowing(following);
    };

    const alreadyFollowing = () => {
        return followers.some((follows) => {
            return follows.follower._id === account._id;
        });
    };
    //console.log(followers);

    useEffect(() => {
        fetchBookmarks();
        fetchUserData();
        fetchFollowers();
        fetchFollowing();
    }, [id]);
    return (
        <div>
        {account && (
            <header className="profile-header">
            <div className="profile-content">
                <div className="row">
                    <div className="profile-personal-image col-sm-1">
                        <section className="photo_size" id="html">
                            <img style={{ width: 150, height: 150 }} src={profilePic} />
                        </section>
                    </div>
                    <div className="profile-personal-info col-sm-5">
                        { account.role === "ADMIN" && (
                            <span>
                                <b>{<b>{userFirstName} {userLastName} {userRole}</b>}</b><br/>{<b>{userEmail}</b>}<br/>{<b>{userZipCode}</b>}
                            </span>                            
                        )}
                        { account.role !== "ADMIN" && (
                            <span>
                                <b>{<b>{userFirstName} {userLastName}</b>}</b><br/>{<b>{userEmail}</b>}<br/>{<b>{userZipCode}</b>}
                            </span>                
                        )}
                    </div>
                    {account.role != Roles.ANONYMOUS &&
                    <div className='col-sm follow-button'>
                    {account._id != id && (
                        <>
                            {alreadyFollowing() ? (
                                <Link
                                className="btn btn-success button bookmark-delete-button"
                                onClick={unfollowUser}
                                >
                                Unfollow
                                </Link>
                            ) : (
                                <Link
                                className="btn btn-success button bookmark-delete-button"
                                onClick={followUser}
                                >
                                Follow
                                </Link>    
                            )}
                        </>

                    )}
                    </div>
                    }

                </div>
            </div>
            {account.role != Roles.ANONYMOUS &&
                <div className="row">
                    <div className="col-sm-4">
                        <div className="profile-bookmark-info row-1 mt-5">
                            <h3>Bookmarked Restaurants</h3>
                        </div>
                        <div className="list-group">
                        {bookmarks.map((bookmark, index) => (
                            <li key={index} className="list-group-item">
                                <Link className="bookmark-items" to={`/FoodPilot/details/${bookmark.restaurantId}`}>
                                {bookmark.restaurantName}
                                {account._id == id &&
                                    <Link
                                    className="btn btn-danger button bookmark-delete-button"
                                    onClick={() => deleteBookmark(bookmark.restaurantId)}>
                                    Delete
                                </Link>                            
                                }
                                </Link>
                            </li>
                        ))}
                        </div>
                    </div>

                    <div className="col-sm-4">
                    <div className="profile-bookmark-info row-1 mt-5">
                        <h3>Following</h3>
                    </div>
                    <div className="list-group">
                    {following.map((follows, index) => (
                        <li key={index} className="list-group-item">
                            <Link className="bookmark-items" to={`/FoodPilot/profile/${follows.followed._id}`}>
                            {follows.followed.username}
                            {account._id == id &&
                                <Link
                                className="btn btn-danger button bookmark-delete-button"
                                onClick={() => unfollowUser(follows.followed)}>
                                Delete
                            </Link>                            
                            }
                            </Link>
                        </li>
                    ))}
                    </div>
                </div>
                <div className="col-sm">
                    <div className="profile-bookmark-info row-1 mt-5">
                        <h3>Followers</h3>
                    </div>
                    <div className="list-group">
                    {followers.map((follows, index) => (
                        <li key={index} className="list-group-item">
                            <Link className="bookmark-items" to={`/FoodPilot/profile/${follows.follower._id}`}>
                            {follows.follower.username}
                            </Link>
                        </li>
                    ))}
                    </div>
                </div>            
            </div>
            }
            {account.role != Roles.ANONYMOUS &&
            <Link
              key={"list"}
              to={'/FoodPilot/home'}
              onClick={signout}
              className="btn btn-danger button edit-button mt-5 me-2">
                Log Out
            </Link>
            }
            {account.role == Roles.ANONYMOUS &&
            <Link
              key={"list"}
              to={'/FoodPilot/login'}
              className="btn btn-success button edit-button mt-5 me-2">
                Log In
            </Link>
            }
{/* `            ONLY SHOW WHEN USER IS CURRENT USER` */}
            {account._id == id &&
                <Link
                key={"edit"}
                to={`/FoodPilot/profile/edit/${account._id}`}
                className="btn btn-success button edit-button mt-5 me-2">
                Edit Profile
            </Link>          
            }

            {/* ONLY SHOW WHEN USER IS CURRENT AND IS ADMIN */}
            <a>{account.role}</a>
            {account.role == Roles.ADMIN && (
                <Link
                    key={"list"}
                    to={'/FoodPilot/admin/users'}
                    className="btn btn-warning button edit-button mt-5 me-2">
                    Profile List
                </Link>
            )}
          </header>
        )}
        </div>
    )
};

export default Profile;