import axios from "axios";

export const api = axios.create({
    baseURL: 'https://oraculo-mwmg.onrender.com'
    // baseURL: 'http://10.0.2.2:3333'
});