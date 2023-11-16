import { addNewAdmin, getClients } from "../api/admin.api";
import { useState } from "react";

export const useAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clients, setClients] = useState([]);

  const createNewAdmin = async (newAdmin) => {
    setIsLoading(true);
    try {
      await addNewAdmin(newAdmin);
    } catch (error) {
      console.error("Error authenticating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllClients = async () => {
    setIsLoading(true);
    try {
      const getClientsResponse = await getClients();
      setClients(getClientsResponse);
      console.log(clients);
    } catch (error) {
      console.error("Error authenticating user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, createNewAdmin, getAllClients, clients };
};
