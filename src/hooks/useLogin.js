import Swal from "sweetalert2";
import { authenticateUser, getUserInfo } from "../api/login.api";
import { useState, useEffect, useContext } from "react";
import { getSaleOrdersFromClient, registerUser } from "../api/user.api";

export const useLogin = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userAgain, setUserAgain] = useState(false);
  const [saleOrders, setSaleOrders] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [userAgain]);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const authenticationToken = await authenticateUser({ email, password });
      localStorage.setItem("bearerToken", authenticationToken);
      const response = await getUserInfo(authenticationToken);
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
      const responseFromOrders = await getSaleOrdersFromClient(response.id);
      console.log("SALE ORDERS DEL CLIENT ACTUAL", responseFromOrders);
      setSaleOrders(responseFromOrders);
      localStorage.setItem(
        "userSaleOrders",
        JSON.stringify(responseFromOrders)
      );
      window.location.reload();
    } catch (error) {
      console.error("Error authenticating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("bearerToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userSaleOrders");
    setUser(null);
  };

  const registerNewUser = async (newUser) => {
    try {
      await registerUser(newUser);
      Swal.fire({
        icon: "success",
        title: "Usuario creado",
        text: "El usuario se ha creado correctamente",
      });
    } catch (error) {
      console.error("Error authenticating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    login,
    logout,
    getUserInfo,
    registerNewUser,
    saleOrders,
  };
};
