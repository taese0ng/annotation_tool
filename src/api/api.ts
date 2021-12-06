import type { AxiosInstance } from 'axios';
import axios from 'axios';

const API: AxiosInstance = axios.create({
    baseURL: 'url',
    timeout: 10000,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default API;
