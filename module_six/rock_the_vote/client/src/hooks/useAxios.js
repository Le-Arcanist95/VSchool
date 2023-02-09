import axios from "axios";

const SERVER_URL = "http://localhost:9000/";
const axiosClient = axios.create({
    baseURL: SERVER_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export default axiosClient;