import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './home.css'; // Make sure to create a corresponding CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function home(){
  
  return(
    <div className='ed-mg-t'>

    <div className='float-center d-flex'>
      <h1 className='bg-c'>Let's find some food with FoodPilot!</h1>

    </div>
    <div className="d-flex align-items-stretch searchBar">
                <p className="control ed-b">
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
                </p>
                <button className="btn suppose btn-danger  searchButton" >
                    <FaSearch className="searchIcon"/>
                </button>


            </div>
    </div>
  );
}
  

export default home;
