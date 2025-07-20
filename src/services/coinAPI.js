import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9000/api';

export const fetchCoins = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/coins`);
  return data;
};
