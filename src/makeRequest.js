import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://vashop-api.onrender.com/api/v1/",
});