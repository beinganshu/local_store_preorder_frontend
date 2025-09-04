// src/utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://anxhu2004-local-store-backend.hf.space", // or wherever your FastAPI runs
});

// Attach token from localStorage/sessionStorage
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // or sessionStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

