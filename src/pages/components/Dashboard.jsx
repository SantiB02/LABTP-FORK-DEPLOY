import React, { useState, useEffect } from "react";
import DashboardUsers from "./DashboardUsers";
import { DashboardProducts } from "./DashboardProducts";
import { Navigate } from "react-router-dom";
import { DashboardSaleOrders } from "./DashboardSaleOrders";
import { useSaleOrders } from "../../hooks/useSaleOrders";

const Dashboard = ({ products, user }) => {
  const [productList, setProductList] = useState(products);
  const [isProductsClicked, setIsProductsClicked] = useState(true);
  const [isClientsClicked, setIsClientsClicked] = useState(false);
  const [isSaleOrdersClicked, setIsSaleOrdersClicked] = useState(false);

  const { getAllSaleOrders, allSaleOrders } = useSaleOrders();

  const handleProductDashboardClick = () => {
    setIsProductsClicked(true);
    setIsClientsClicked(false);
    setIsSaleOrdersClicked(false);
  };

  const handleUserDashboardClick = () => {
    setIsClientsClicked(true);
    setIsProductsClicked(false);
    setIsSaleOrdersClicked(false);
  };

  const handleSaleOrdersDashboardClick = () => {
    setIsSaleOrdersClicked(true);
    setIsProductsClicked(false);
    setIsClientsClicked(false);
  };

  useEffect(() => {
    getAllSaleOrders();
  }, []);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  if (user?.userType === "Client" || !user) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div className="flex pl-8 bg-blue-900 flex-row justify-start align-center h-[100%] min-h-[80vh]	mb-[50px] ">
        <aside className="flex flex-col space-y-4 mr-10">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

          <button
            className={`w-[100%] p-2 text-white ${
              isProductsClicked ? "bg-blue-500" : "bg-[#151130]"
            }`}
            onClick={handleProductDashboardClick}
          >
            Productos
          </button>
          <button
            className={`w-[100%] p-2 text-white ${
              isClientsClicked ? "bg-blue-500" : "bg-[#151130]"
            }`}
            onClick={handleUserDashboardClick}
          >
            Usuarios
          </button>
          <button
            className={`w-[100%] p-2 text-white ${
              isSaleOrdersClicked ? "bg-blue-500" : "bg-[#151130]"
            }`}
            onClick={handleSaleOrdersDashboardClick}
          >
            Órdenes de venta
          </button>
        </aside>
        <div className="">
          {isProductsClicked ? (
            <DashboardProducts products={productList} />
          ) : null}
          {isClientsClicked ? <DashboardUsers /> : null}
          {isSaleOrdersClicked ? (
            <DashboardSaleOrders allSaleOrders={allSaleOrders} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
