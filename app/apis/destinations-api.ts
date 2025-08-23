import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.100.65:3000/api', // Adjust the base URL as needed
});

export const fetchDestinations = async () => {
  const response = await API.get('/destinations');
  return response.data;
};
