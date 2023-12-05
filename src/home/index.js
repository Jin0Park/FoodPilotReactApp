import React from 'react';
import './home.css'; // Make sure to create a corresponding CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function home(){
    console.log("Inside Home")
    return (
      <header className="search-bar">
        <div className="search-content">
          <h1 style={{"color": "black"}}>Search for restaurant</h1>
          <div className="search-box">
            <input type="text" className="search-edits" placeholder="Search" />
            <button style={{"color": "black"}} type="button">🔍</button>
          </div>
        </div>
      </header>
    );
  };
  
export default home;
