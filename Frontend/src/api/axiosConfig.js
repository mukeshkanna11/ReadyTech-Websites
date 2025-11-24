// src/api/axiosConfig.js
import axios from "axios";

// ------------------------------
// 🔥 BASE URL (Auto from .env)
// Add this in your .env file:
// VITE_API_BASE_URL="https://readytech-websites.onrender.com/api"
// ------------------------------

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

// ------------------------------
// 🔐 Automatically attach token if user is logged in
// (If your system uses login — safe to keep)
// ------------------------------
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("authToken"); // your frontend auth token key
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ------------------------------
// ❗ Global Error Handler
// Helps catch axios errors in UI
// ------------------------------
API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API ERROR:", err?.response?.data || err.message);

    // optional: auto logout on 401
    if (err.response?.status === 401) {
      localStorage.removeItem("authToken");
    }

    return Promise.reject(err);
  }
);

export default API;
