import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import * as client from "./client";

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
                        onChange={(e) => setSearchConditions({...searchConditions, food: e.target.value})}/>
                </p>
                <p className="control">
                    <button className="btn btn-light" style={{ height: '100%' }}>NEAR</button>
                </p>
                <p className="control">
                    <input className="input" type="text"
                        style={{ height: '100%' }}
                        placeholder="City or Zipcode"
                        onChange={(e) => setSearchConditions({...searchConditions, location: e.target.value})}/>
                </p>
                <button className="btn btn-primary" style={{ height: '100%' }}
                    onClick={search}>
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