import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './home.css'; // Make sure to create a corresponding CSS file
// import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
//import Background from '/Users/helenhu/2023/fall/webdev/FinalProject/FoodPilotReactApp/src/Background.png';
import Background from '../images/Background.png';
import Japanese from '../images/Japanese.jpeg';
import Mexican from '../images/Mexican.jpeg';
import American from '../images/American.jpeg';
import Chinese from '../images/Chinese.png';
import Mediterranean from '../images/Mediterranean.jpeg';
import { Link } from "react-router-dom";


function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/FoodPilot/search`;
    navigate(path);
  }
  return (
    <div className='ed-mg-t'>
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img width="600px" height="600px" src={American} className="d-block w-100" alt="Mexican Food" />
          </div>

          <div className='carousel-item'>
            <img width="600px" height="600px" src={Chinese} className="d-block w-100" alt="..." />
          </div>

          <div className='carousel-item'>
            <img width="600px" height="600px" src={Mediterranean} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
      <div className='float-center d-flex'>
        <h1 className='bg-c'>Let's find some food with FoodPilot!</h1>

      </div>
      <div className="d-flex align-items-stretch search-bar">
        <div style={{ margin: "0 auto", display: "flex" }}>
          {/* <p className="control ed-b">
            <input className="input" type="text"
              style={{ height: '100%' }}
              placeholder="Food: Asian, American..."
            />
          </p>
          <p className="control ed-b">
            <input className="input" type="text"
              style={{ height: '100%' }}
              placeholder="Location: Zipcode"
            />
          </p> */}
          <button className="btn suppose btn-danger home-search-btn searchButton"
            onClick={routeChange}>
            Search from here
            <FaSearch className="search-icon-spacing" />
            {/* <FaSearch className="search-icon-spacing" style={{ marginLeft: '50px' }} /> */}
          </button>
          {/* <button className="btn suppose btn-danger  searchButton" >
            <FaSearch className="searchIcon" />
          </button> */}
        </div>
      </div>
      <h1 className="popular-header"> Most popular Restaurants in Holiday Seasons</h1>
      <div class="container" style={{ paddingBottom: "100px" }}>
        {/* <img src="#" class="card-img-top" alt="restaurant description"> */}
        {/* <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div> */}

        <div class="card-container">
          <div class="card">
            <img src={Background} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn btn-primary">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={Background} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn btn-primary">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={Background} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn btn-primary">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={Background} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn btn-primary">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={Background} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn btn-primary">Go to Restaurant</a>
            </div>
          </div>
          <div class="card">
            <img src={Background} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Restaurant Name</h5>
              <p class="card-text">Restaurant Description</p>
              <a href="#" class="btn btn-primary">Go to Restaurant</a>
            </div>
          </div>
        </div>
        <footer>
          <p>© 2023 FoodPilot Inc. All Rights Reserved. Contact us at: foodpilot@gmail.com</p>
          <p>Presented by Helen, Jin, Matt, Rasy</p>
        </footer>

      </div>
    </div >
  );
}


export default Home;



