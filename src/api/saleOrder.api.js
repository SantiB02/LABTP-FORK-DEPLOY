import axios from "axios";
import Swal from "sweetalert2";

const REACT_APP_API_URL =
  "https://loren-tp-programacion3.azurewebsites.net/api";

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

export const getSaleOrders = async () => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/SaleOrder`, {
      headers: {
        Authorization: `Bearer ${AuthorizationToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting sale order:", error);
    throw error;
  }
};

export const completeSaleOrderAPI = async (orderId) => {
  try {
    await axios.put(
      `${REACT_APP_API_URL}/SaleOrder/${orderId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${AuthorizationToken()}`,
        },
      }
    );
    window.location.reload();
  } catch (error) {
    console.error("Error posting sale order:", error);
    throw error;
  }
};

export const deleteSaleOrderAPI = async (orderId) => {
  try {
    const result = await Swal.fire({
      title: "Espere...",
      text: "¿Seguro quiere borrar esta orden de venta?",
      confirmButtonText: "Si :(",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      await axios.delete(`${REACT_APP_API_URL}/SaleOrder/${orderId}`, {
        headers: {
          Authorization: `Bearer ${AuthorizationToken()}`,
        },
      });
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
    console.error("Error deleting product:", error);
    throw error;
  }
};
