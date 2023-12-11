import axios from "axios";

const CONTACT_API = `${process.env.REACT_APP_API_URL}/api/contact`;

const request = axios.create({
    withCredentials: true,
});

export const createContact = async (contact) => {
    const response = await request.post(CONTACT_API, contact);
    console.log("We have received your message! And we will get back to you soon!");
    return response.data;

}