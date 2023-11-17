import axios from "axios";
import Swal from "sweetalert2";

const REACT_APP_API_URL =
  "https://loren-tp-programacion3.azurewebsites.net/api";

const AuthorizationToken = () => {
  const token = localStorage.getItem("bearerToken");
  return `${token}`;
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/Product`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const postProduct = async (newProduct) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API_URL}/Product`,
      newProduct,
      {
        headers: {
          Authorization: `Bearer ${AuthorizationToken()}`,
        },
      }
    );
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${REACT_APP_API_URL}/Product/${id}`, {
      headers: {
        Authorization: `Bearer ${AuthorizationToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const updateProductAdmin = async (updatedProduct) => {
  try {
    const response = await axios.put(
      `${REACT_APP_API_URL}/Product/${updatedProduct.id}`,
      updatedProduct,
      {
        headers: {
          Authorization: `Bearer ${AuthorizationToken()}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};
