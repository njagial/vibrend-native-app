import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // or your hosted URL

export const fetchDestinations = async (token: string) => {
    const response = await axios.get(`${API_BASE_URL}/destinations`, {
        headers: { Authorization: `Bearer ${token}` }
    });

    return response.data;
};
