import { useState, useEffect } from "react";
import { deleteUserAPI, updateUserAPI } from "../api/user.api";

export const useUser = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateUser = async (updatedUser) => {
    setIsLoading(true);
    try {
      await updateUserAPI(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUserAccount = async () => {
    setIsLoading(true);
    try {
      await deleteUserAPI();
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserOrderLines = async (id) => {
    setIsLoading(true);
    try {
      const response = await getUser(id);
      setProducts(response);
    } catch (error) {
      console.error("Error fetching user order lines:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    deleteUserAccount,
    updateUser,
  };
};
