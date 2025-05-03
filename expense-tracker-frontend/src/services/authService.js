import axios from 'axios';

const BASE_URL = 'http://44.203.183.171:8080/api/auth'; // Adjust if needed

const authService = {
  login: async (credentials) => {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  },

  signup: async (userData) => {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  }
};

export default authService;
