// frontend/src/services/newsApi.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // URL do backend
});

export const getNews = () => {
  return api.get<string[]>('/news');
};
