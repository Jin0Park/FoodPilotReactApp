import axios from "axios";
// import express from "express";
export const BASE_API = "http://localhost:4000";
export const RESTAURANTS_API = `${BASE_API}/api/search`;

export const findRestaurants = async (searchConditions) => {
    console.log("Search Conditions:", searchConditions);
    const response = await axios.get(
        `${RESTAURANTS_API}/${searchConditions.food}/${searchConditions.location}`,
        searchConditions
    );
    return response.data;
};