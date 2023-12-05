import React, { useState } from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './home.css'; // Make sure to create a corresponding CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../search';

function Home({searchConditions, setSearchConditions}) {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/FoodPilot/search");
  };

  return (
    <div>
      <h1 className='searchHeader'>Let's find some food with FoodPilot!</h1>
      <div className="d-flex align-items-stretch searchBar">
        <p className="control ed-b">
            <input className="input" type="text"
                style={{ height: '100%' }} 
                placeholder="Food: Asian, American..."
                onClick={handleSearch}
                //onChange={(e) => setSearchConditions({...searchConditions, food: e.target.value})}
            />
        </p>
        <p className="control ed-b">
            <input className="input" type="text"
                style={{ height: '100%' }}
                placeholder="Location: Zipcode"
                onClick={handleSearch}
                //onChange={(e) => setSearchConditions({...searchConditions, location: e.target.value})}
            />
        </p>
        <button className="btn suppose btn-danger searchButton" onClick={handleSearch}>
            <FaSearch className="searchIcon"/>
        </button>
      </div>
    </div>
  );
}

export default Home;