import axios from "axios";

// swt the base URL
const api = axios.create({
    baseURL:"http://localhost:5000/api",
});

export default api;
