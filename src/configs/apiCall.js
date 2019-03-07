import axios from 'axios';

import { BASE_URL } from './constants';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;
