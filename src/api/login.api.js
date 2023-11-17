import axios from "axios";
import Swal from "sweetalert2";

const quefuncione = "";
const REACT_APP_API_URL =
  "https://loren-tp-programacion3.azurewebsites.net/api";

export const authenticateUser = async (user) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API_URL}/Authenticate`,
      user
    );
    console.log(response);
    return response.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario o contraseña incorrectos",
    });
    console.error("Error authenticating user:", error);
    throw error;
  }
};

export const getUserInfo = async (authenticationToken) => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/User/UserInfo`, {
      headers: {
        Authorization: `Bearer ${authenticationToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

export const getSaleOrdersFromClient = async (id) => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/SaleOrder/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};
