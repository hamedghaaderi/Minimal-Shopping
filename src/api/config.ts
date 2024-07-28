import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:8000/",
});

export default baseUrl;
