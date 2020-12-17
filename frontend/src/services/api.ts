import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.API_ENVIRONMENT === 'LOCAL'
      ? 'http://localhost:3333'
      : process.env.API_ADDRESS,
});

export default api;
