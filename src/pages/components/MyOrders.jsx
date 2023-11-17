import React from "react";
import { useUser } from "../../hooks/useUser";

export const MyOrders = () => {
  const { orders } = useUser();

  return <div>Tus pedidos</div>;
};
