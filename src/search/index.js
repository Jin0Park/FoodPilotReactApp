import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as client from "./client";
import "./index.css";
import { FaStar } from "react-icons/fa";

function Search() {
    const { food, location } = useParams();
    const [searchConditions, setSearchConditions] = useState({ food: food, location: location });
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
            fetchResults({ food, location });
        }
    }, [food, location]);

    return (
        <div className="search-container">
            <h1 className="search-header">Let's find some food with FoodPilot!</h1>
            <div className="search-bar">
                <input
                    className="input-food"
                    type="text"
                    placeholder="Food: Asian, American..."
                    value={searchConditions.food}
                    onChange={(e) =>
                        setSearchConditions({ ...searchConditions, food: e.target.value })
                    }
                />
                <input
                    className="input-location"
                    type="text"
                    placeholder="Location: Zipcode"
                    value={searchConditions.location}
                    onChange={(e) =>
                        setSearchConditions({ ...searchConditions, location: e.target.value })
                    }
                />
                <button
                    className="search-button"
                    onClick={() =>
                        navigate(`/FoodPilot/search/${searchConditions.food}/${searchConditions.location}`)
                    }
                >
                    <FaSearch className="search-icon" />
                </button>
            </div>

            {results && <h2 className="result-header">Here are the results from FoodPilot!</h2>}
            <div className="search-results">
                <ul className="results-list">
                    {results &&
                        results.map((restaurant, index) => (
                            <Link className="restaurant-name-link" to={`/FoodPilot/details/${restaurant.id}`}>
                                <li key={index} className="result-item">
                                    <div className="restaurant-details">
                                        <div className="restaurant-image">
                                            <img className="restaurant-image"
                                                src={restaurant.image_url}
                                                alt={`${restaurant.name} image`}
                                            />
                                        </div>
                                        <div className="restaurant-info">
                                            <h3 className="restaurant-name">
                                                Name: {restaurant.name}
                                            </h3>
                                            <p>Business Status: {restaurant.is_closed === false ? 'Opened' : 'Closed'}</p>
                                            <p>Rating: {restaurant.rating}</p>
                                            <p>Price: {restaurant.price ? restaurant.price : 'N/A'}</p>
                                            <p>Address: {restaurant.location.display_address}</p>
                                            <p>Phone: {restaurant.display_phone}</p>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Search;
