import axios from 'axios';

export const http = axios.create({
    baseURL: process.env.TEMPLATE_URL,
});