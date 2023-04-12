import axios from "axios";
const API_URL = process.env.API_URL;
const instance = axios.create({
  baseURL: API_URL || "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
