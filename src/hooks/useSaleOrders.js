import Swal from "sweetalert2";
import { postSaleOrder } from "../api/saleOrder.api";
import { useState, useEffect } from "react";
import { getSaleOrdersFromClient } from "../api/user.api";

export const useSaleOrders = () => {
  const [saleOrders, setSaleOrders] = useState([]);
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

  return {
    addSaleOrder,
    handleSaleOrderState,
    getClientSaleOrders,
    saleOrders,
  };
};
