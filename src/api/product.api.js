import axios from "axios";

const REACT_APP_API_URL = "https://localhost:7080/api";

console.log("REACT_APP_API_URL:", REACT_APP_API_URL);

export const getProducts = async () => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/Product`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const postProduct = async (product) => {
    try {
        const response = await axios.post(`${REACT_APP_API_URL}/Product`, product);
        return response.data;
    } catch (error) {
        console.error("Error posting product:", error);
        throw error;
    }
    }
