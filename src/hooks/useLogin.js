import { authenticateUser, getUserInfo } from "../api/login.api";
import { useState, useEffect } from "react";

export const useLogin = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const authenticationToken = await authenticateUser({ email, password });
      localStorage.setItem("bearerToken", authenticationToken);
      const response = await getUserInfo(authenticationToken);
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
    } catch (error) {
      console.error("Error authenticating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("bearerToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, isLoading, login, logout };
};
