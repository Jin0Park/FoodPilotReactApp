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
import DingFeng from '../images/DingFeng.jpg';
import HoangLan from '../images/HoangLan.jpg';
import SandPointGrill from '../images/SandPointGrill.jpg';
import StateSide from '../images/StateSide.jpg';
import Shiros from '../images/Shiros.jpg';
import SpicyPoPo from '../images/SpicyPoPo.jpg';
import Mediterranean from '../images/Mediterranean.jpeg';
import { Link } from "react-router-dom";


function Home() {
  // restaurantNames:[DingFeng, Sand Point Grill, Hoang Lan, StateSide, Shiro's, Spicy PoPo]
  const restaurantYelpIds = ["fsUHrquI9L7pEhzZYMmLiQ", "ehRi1S7QHUvl5LCJhEoepg", "hoang-HK0V0vH_pCGCi5bqhfNp1w", "_obwG8MG2OuFUe1TW3BjGw", "YSQiqH7RIWORk_Qp-A4SOg", "NKZF9zAJhI0iaG0t1aVx0w"];
  let navigate = useNavigate();

  // <Link className="btn" to={`/FoodPilot/details/${restaurantYelpIds[0]}`}>Go to Restaurant</Link>

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
            <img src={SandPointGrill} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Sand Point Grill</h5>
              <p class="card-text">American style grill and wine tasting</p>
              <Link className="btn btn-primary" to={`/FoodPilot/details/${restaurantYelpIds[1]}`}>For more details</Link>
            </div>
          </div>
          <div class="card">
            <img src={StateSide} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">StateSide</h5>
              <p class="card-text">One-of-the-kind Asian fusion</p>
              <Link className="btn btn-primary" to={`/FoodPilot/details/${restaurantYelpIds[3]}`}>For more details</Link>
            </div>
          </div>
          <div class="card">
            <img src={Shiros} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Shiro's</h5>
              <p class="card-text">The premium suishi and Japanese cuisines</p>
              <Link className="btn btn-primary" to={`/FoodPilot/details/${restaurantYelpIds[4]}`}>For more details</Link>
            </div>
          </div>
          <div class="card">
            <img src={DingFeng} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">DingFeng Restaurant</h5>
              <p class="card-text">The authentic Chinese seafood and dim sum</p>
              <Link className="btn btn-primary" to={`/FoodPilot/details/${restaurantYelpIds[0]}`}>For more details</Link>
            </div>
          </div>
          <div class="card">
            <img src={HoangLan} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Hoang Lan Restaurant</h5>
              <p class="card-text">The authentic Vietnamese noodles</p>
              <Link className="btn btn-primary" to={`/FoodPilot/details/${restaurantYelpIds[2]}`}>For more details</Link>
            </div>
          </div>
          <div class="card">
            <img src={SpicyPoPo} className="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Spicy PoPo</h5>
              <p class="card-text">The authentic Szechuan style cuisines </p>
              <Link className="btn btn-primary" to={`/FoodPilot/details/${restaurantYelpIds[5]}`}>For more details</Link>
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