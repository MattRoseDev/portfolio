import axios from "axios";

const apiRequest = axios.create({
  baseURL: "/api",
});

export { apiRequest };
