import axios from "axios";

const LOGIN_URL = `${process.env.REACT_APP_API_URL}/api/login`;

export const registerUser = async (userId, payload) => {
  const response = await axios.post(
    `${LOGIN_URL}/${userId}`,
    payload
  );
  return response.data;
};

export const findUserById = async (userId) => {
  const response = await axios.get(`${LOGIN_URL}/${userId}`);
  return response.data;
};

