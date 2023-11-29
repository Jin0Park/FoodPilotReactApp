import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import * as client from "./client";
import "./index.css";

function Search() {
    const [searchConditions, setSearchConditions] = useState({food: "", location: ""});
    const [results, setResults] = useState(null);

    const search = async () => {
        try {
            const searchResults = await client.findRestaurants(searchConditions);
            setResults(searchResults);
        } catch (error) {
            console.error("Error fetching results:", error);
        }
    };

    return (
        <div>
            <h1 className="searchHeader">Let's find some food with FoodPilot!</h1>
            <div className="d-flex align-items-stretch searchBar">
                <p className="control">
                    <input className="input" type="text"
                        style={{ height: '100%' }} 
                        placeholder="Food: Asian, American..."
                        onChange={(e) => setSearchConditions({...searchConditions, food: e.target.value})}/>
                </p>
                <p className="control">
                    <input className="input" type="text"
                        style={{ height: '100%' }}
                        placeholder="Location: Zipcode"
                        onChange={(e) => setSearchConditions({...searchConditions, location: e.target.value})}/>
                </p>
                <button className="btn btn-primary col-auto searchButton" onClick={search}>
                    <FaSearch className="searchIcon"/>
                </button>
            </div>

            <h2 className="resultHeader">Here are the results from FoodPilot!</h2>
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
                                        <Link className="restaurantNameLink" to={restaurant.url}>
                                            <h3 className="restaurantName">Name: {restaurant.name}</h3>
                                        </Link>
                                        <p>Business Status: {restaurant.is_closed === false ? 'Opened' : 'Closed'}</p>
                                        <p>Rating: {restaurant.rating}</p>
                                        <p>Price: {restaurant.price ? restaurant.price : 'N/A'}</p>
                                        <p>Address: {restaurant.location.display_address}</p>
                                        <p>Phone: {restaurant.display_phone}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <pre>{JSON.stringify(results, null, 2)}</pre>
            </div>
        </div>
    );
}

export default Search;