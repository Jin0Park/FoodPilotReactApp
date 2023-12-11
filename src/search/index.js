import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as client from "./client";
import "./index.css";
import { FaStar } from "react-icons/fa";

function Search() {
    const { food, location } = useParams();
    const [searchConditions, setSearchConditions] = useState({food: food, location: location});
    const [results, setResults] = useState(null);
    const navigate = useNavigate();
    const account = useSelector((state) => state.accountReducer.account);

    const fetchResults = async (searchConditions) => {
        const results = await client.findRestaurants(searchConditions);
        setResults(results);
        setSearchConditions(searchConditions);
    };

    useEffect(() => {
        if (food && location) {
            fetchResults({food, location});
        }
    }, [food, location]);

    return (
        <div>
            <h1 className="searchHeader">Let's find some food with FoodPilot!</h1>
            <div className="d-flex align-items-stretch searchBar">
                <p className="control ed-b">
                    <input className="input" type="text"
                        style={{ height: '100%' }} 
                        placeholder="Food: Asian, American..."
                        // value={searchConditions.food}
                        onChange={(e) => setSearchConditions({...searchConditions, food: e.target.value})}/>
                </p>
                <p className="control ed-b">
                    <input className="input" type="text"
                        style={{ height: '100%' }}
                        placeholder="Location: Zipcode"
                        // value={searchConditions.location}
                        onChange={(e) => setSearchConditions({...searchConditions,location: e.target.value})}/>
                </p>
                <button className="btn suppose btn-success col-auto searchButton" 
                        onClick={() => navigate(`/FoodPilot/search/${searchConditions.food}/${searchConditions.location}`)}>
                    <FaSearch className="searchIcon"/>
                </button>
            </div>

            {results && (
                <h2 className="resultHeader">Here are the results from FoodPilot!</h2>
            )}
            <div className="searchResults">
                <ul className="list-group results">
                    {results &&
                        results.map((restaurant, index) => (
                            <li key={index} className="list-group-item">
                                <div className="d-flex">
                                    <div className="col-auto">
                                        <img className="restaurantImage"
                                            src={restaurant.image_url}>
                                        </img>
                                    </div>
                                    <div className="col m-4">
                                        {/* Here, restaurant.id the yelpId of that restaurant. */}
                                        <Link className="restaurantNameLink" to={`/FoodPilot/details/${restaurant.id}`}>
                                            <h3 className="restaurantName">
                                                Name: {restaurant.name}
                                                <button className="btn position-absolute m-1 bookmarkButton">
                                                    <FaStar className="starIcon"/>
                                                </button>
                                            </h3>
                                        </Link>
                                        <p>Business Status: {restaurant.is_closed === false ? 'Opened' : 'Closed'}</p>
                                        <p>Rating: {restaurant.rating}</p>
                                        <p>Price: {restaurant.price ? restaurant.price : 'N/A'}</p>
                                        <p>Address: {restaurant.location.display_address}</p>
                                        <p>Phone: {restaurant.display_phone}</p>
                                    </div>
                                    {/* <div className="col likedUsersBox m-4">
                                        <h4 className="m-2">Liked By:</h4>
                                        <ul className="m-2 likedUsersList">
                                            <li><Link>User 1</Link></li>
                                            <li><Link>User 2</Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
            </div>
        </div>
    );
}

export default Search;