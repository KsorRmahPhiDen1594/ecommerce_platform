// src/api/productApi.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/products";  // Full URL để tránh proxy issue

export const fetchProducts = async () => {
  try {
    console.log("Đang gọi API:", API_URL);  // Debug URL
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json',
        // Nếu protected: 'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
    console.log("Dữ liệu từ API:", response.data);
    return response.data || [];  // Fallback empty array
  } catch (error) {
    console.error("Lỗi khi fetch products:", error.response?.data || error.message);  // Chi tiết error
    // Nếu CORS: error.message có "Network Error" hoặc "CORS policy"
    return [];  // Không crash UI
  }
};