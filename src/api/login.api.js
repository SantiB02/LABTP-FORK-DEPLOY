import axios from "axios";

const REACT_APP_API_URL = "https://localhost:7080/api";

export const authenticateUser = async (user) => {
  console.log("user", user);
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

export const getUserInfo = async (authenticationToken) => {
  console.log("authenticationToken", authenticationToken);
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
