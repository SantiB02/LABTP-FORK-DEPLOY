import axios from "axios";

const REACT_APP_API_URL = "https://localhost:7080/api";
const AuthorizationToken = () => {
  const token = localStorage.getItem("bearerToken");
  return `${token}`;
};

export const addNewAdmin = async (adminData) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API_URL}/User/admin`,
      adminData,
      {
        headers: {
          Authorization: `Bearer ${AuthorizationToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting product:", error);
    throw error;
  }
};

export const getClients = async () => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/User`, {
      headers: {
        Authorization: `Bearer ${AuthorizationToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
