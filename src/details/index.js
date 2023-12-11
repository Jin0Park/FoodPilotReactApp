import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as client from "./client";
import "./index.css";
import { Roles } from "../login/roles";
import * as bookmarksClient from "../bookmark/client";

function Details() {
    const [ restaurant, setRestaurantDetails ] = useState(null);
    // restaurantId is the restaurantId of Yelp.
    const { restaurantId } = useParams();
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const account = useSelector((state) => state.accountReducer.account);
    
    const accountBookmarksRestaurant = async () => {
        const bookmarks = await bookmarksClient.createUserBookmarksRestaurant(account._id, restaurantId);
    };

    const fetchRestaurant = async () => {
        const restaurant = await client.findRestaurantById(restaurantId);
        setRestaurantDetails(restaurant);
    }

    useEffect(() => {
        fetchRestaurant();
    }, []);

    return (
        <div>
            { restaurantId }
            { restaurant && (
                <div className="d-flex">
                    <div>
                        <img className="restaurantImage" src={restaurant.image_url}></img>
                    </div>
                    <div>
                        <Link to={restaurant.url}><h1>{restaurant.name}</h1></Link>
                        { account.role != Roles.ANONYMOUS && (
                            <button className="btn bookmarkButton" onClick={accountBookmarksRestaurant}>
                                Bookmark
                            </button>
                        )}
                        <p>Category: {restaurant.categories[0].title}</p>
                        <p>Business Status: {restaurant.is_closed === false ? 'Opened' : 'Closed'}</p>
                        <p>Rating: {restaurant.rating} (Review Counts: {restaurant.review_count})</p>
                        {restaurant.hours && <p>Currently Open: {restaurant.hours[0].is_open_now === true ? 'Opened' : 'Closed'}</p>}
                        <p>Price: {restaurant.price}</p>
                        <p>Phone: {restaurant.display_phone}</p>
                        <p>Address: {restaurant.location.display_address}</p>
                        <div>
                            Transactions: 
                            <ul>
                                {restaurant.transactions.map((transaction, index) => (
                                    <li key={index}>{transaction}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            Business Hours:
                            {restaurant.hours && (
                                <ul>
                                    {restaurant.hours[0].open.map(day => (
                                        <li key={day.day}>
                                            <p>{daysOfWeek[day.day]}</p>
                                            <p>Start Time: {day.start}</p>
                                            <p>End Time: {day.end}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {/* <pre>{JSON.stringify(restaurant, null, 2)}</pre> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Details;