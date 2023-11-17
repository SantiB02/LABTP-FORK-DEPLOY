import Swal from "sweetalert2";
import { postSaleOrder } from "../api/saleOrder.api";
import { useState, useEffect } from "react";

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

  return { addSaleOrder, handleSaleOrderState, saleOrders };
};
