import type { AxiosInstance } from 'axios';
import axios from 'axios';

const API: AxiosInstance = axios.create({
    baseURL: 'https://crowdbank.co.kr/api/',
    timeout: 10000,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const AnnoAPI: AxiosInstance = axios.create({
    baseURL: 'https://annotation.crowdbank.co.kr/',
    timeout: 10000,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default API;
