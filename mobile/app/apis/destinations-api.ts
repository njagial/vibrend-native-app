import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.100.13:3000/api' // Adjust the base URL as needed
});

export const fetchDestinations = async () => {
  try {
    const response = await API.get('/destinations');
    return response.data;
  } catch (error) {
    console.error('❌ Failed to fetch destinations:', error.message);
    throw error;
  }
};
export const fetchDestinationById = async (id: string) => {
  const response = await API.get(`/destinations/${id}`);
  return response.data;
};

