import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://obscure-coast-34942.herokuapp.com',
});

export default axiosInstance;
