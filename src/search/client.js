import axios from "axios";
// import express from "express";
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
export const YELP_API = "https://api.yelp.com/v3/businesses/search";
export const YELP_API_KEY = "3sROVy-hI2liNmYmfGPGYd1M4UTKf5WSL6-1meh27jp3Hf95glvX_-4yDEls6sIsQj4tqjCIb0-zF-8TQS1_7RJUyYGl-2gjngWUKkkWzj1fSEldRwnYBYuGqpY-XHYx"

export const findRestaurants = (term, location) => {
    const options = {
        method: 'GET',
        url: corsProxyUrl + YELP_API,
        params: {term: term, location: location, sort_by: 'best_match', limit: '20'},
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${YELP_API_KEY}`
        }
    };

    let responseData;
    console.log("Called")
    axios
        .request(options)
        .then(function (response) {
            responseData = response.data;
            console.log(responseData);
        })
        .catch(function (error) {
            console.error(error);
        });
    
    return responseData;
};