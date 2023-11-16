import axios from "axios";

const REACT_APP_API_URL = "https://localhost:7080/api";

export const authenticateUser = async (user) => {
  try {
    const response = await axios.post(
      `${REACT_APP_API_URL}/Authenticate`,
      user
    );
    return response.data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};

export const getUserInfo = async (authenticationToken, email) => {
  try {
    const response = await axios.get(`${REACT_APP_API_URL}/User/${email}`, {
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
