import Swal from "sweetalert2";
import { authenticateUser, getUserInfo } from "../api/login.api";
import { useState, useEffect, useContext } from "react";
import { registerUser } from "../api/user.api";

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
      console.log("RESPONSE DEL AWAIT", response);
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
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
      const registerResponse = await registerUser(newUser);
      console.log("RESPONSE DE REGISTRO", registerResponse);
      Swal.fire({
        icon: "success",
        title: "Usuario creado",
        text: "El usuario se ha creado correctamente",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Usuario inválido",
        text: "El usuario ingresado ya se encuentra creado o tiene datos erróneos",
      });
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
