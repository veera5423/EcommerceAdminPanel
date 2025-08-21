import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_UR || 'http://localhost:8080';

const api = axios.create({
  baseURL: apiUrl,
});

export default api; 