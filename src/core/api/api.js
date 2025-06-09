import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:8092/api/",
    headers:{
        "Content-Type":"application/json"
    }
});

api.interceptors.request.use(
  (config) => {
    if (!config.url.includes('login')) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = token.startsWith('Bearer') ? token : `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);