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
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return { addSaleOrder, handleSaleOrderState, saleOrders };
};
