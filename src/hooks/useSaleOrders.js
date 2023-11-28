import Swal from "sweetalert2";
import {
  completeSaleOrderAPI,
  deleteSaleOrderAPI,
  getSaleOrders,
  postSaleOrder,
} from "../api/saleOrder.api";
import { useState } from "react";
import { getSaleOrdersFromClient } from "../api/user.api";

export const useSaleOrders = () => {
  const [saleOrders, setSaleOrders] = useState([]);
  const [allSaleOrders, setAllSaleOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaleOrderState = (state) => {
    setSaleOrders(state);
  };

  const addSaleOrder = async (saleOrder) => {
    setIsLoading(true);
    try {
      await postSaleOrder(saleOrder);
      setSaleOrders([...saleOrders, saleOrder]);
      Swal.fire({
        icon: "success",
        title: "Orden de venta creada",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const getClientSaleOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    const responseFromOrders = await getSaleOrdersFromClient(userId);
    setSaleOrders(responseFromOrders);
    localStorage.setItem("userSaleOrders", JSON.stringify(responseFromOrders));
  };

  const getAllSaleOrders = async () => {
    const allSaleOrders = await getSaleOrders();
    setAllSaleOrders(allSaleOrders);
  };

  const completeSaleOrder = async (orderId) => {
    setIsLoading(true);
    try {
      await completeSaleOrderAPI(orderId);
    } catch (error) {
      console.error("Error completing sale order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSaleOrder = async (orderId) => {
    setIsLoading(true);
    try {
      await deleteSaleOrderAPI(orderId);
    } catch (error) {
      console.error("Error deleting sale order:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addSaleOrder,
    handleSaleOrderState,
    getClientSaleOrders,
    getAllSaleOrders,
    completeSaleOrder,
    deleteSaleOrder,
    saleOrders,
    allSaleOrders,
  };
};
