import axios from "axios";

const REACT_APP_API_URL = "https://loren-tp-programacion3.azurewebsites.net/api";

const AuthorizationToken = () => {
  const token = localStorage.getItem("bearerToken");
  return `${token}`;
};

export const postSaleOrder = async (newSaleOrder) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API_URL}/SaleOrder`,
      newSaleOrder,
      {
        headers: {
          Authorization: `Bearer ${AuthorizationToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting sale order:", error);
    throw error;
  }
};
