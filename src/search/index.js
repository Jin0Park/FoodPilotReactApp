import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import * as client from "./client";

function Search() {
    const [food, setFood] = useState("Asian");
    const [location, setLocation] = useState("98105");
    const [results, setResults] = useState(null);

    const fetchRestaurants = async () => {
        const results = await client.findRestaurants(food, location);
        setResults(results);
    };

    return (
        <div className="row search_bar">
            <h1>Search Foods Near You</h1>
            <div className="d-flex align-items-stretch m-0 p-0">
                <p className="control">
                    <button className="btn btn-light" style={{ height: '100%' }}>FOOD</button>
                </p>
                <p className="control">
                    <input className="input" type="text" 
                        style={{ height: '100%' }} 
                        placeholder="Asian, American..."
                        value={food}
                        onChange={(e) => {setFood(e.target.value)}}/>
                </p>
                <p className="control">
                    <button className="btn btn-light" style={{ height: '100%' }}>NEAR</button>
                </p>
                <p className="control">
                    <input className="input" type="text"
                        style={{ height: '100%' }}
                        placeholder="City or Zipcode"
                        value={location}
                        onChange={(e) => {setLocation(e.target.value)}}/>
                </p>
                <button className="btn btn-primary" style={{ height: '100%' }}
                    onClick={fetchRestaurants}>
                    <FaSearch style={{ height: '100%' }} />
                </button>
            </div>
            <div>
                <pre>JSON.stringify(results, null, 2)</pre>
            </div>
        </div>
    );
}

export default Search;