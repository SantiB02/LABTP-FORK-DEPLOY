import React, { useState } from "react";
import DashboardUsers from "./DashboardUsers";
import { DashboardProducts } from "./DashboardProducts";

const Dashboard = ({ products }) => {
  const [isProductsClicked, setIsProductsClicked] = useState(false);
  const [isClientsClicked, setIsClientsClicked] = useState(false);

  const handleProductDashboardClick = () => {
    setIsProductsClicked(true);
    setIsClientsClicked(false);
  };

  const handleUserDashboardClick = () => {
    setIsClientsClicked(true);
    setIsProductsClicked(false);
  };

  return (
    <div className="p-8 h-[100%]">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <aside className="flex flex-col space-y-4">
        <button
          className={`p-2 text-white ${
            isProductsClicked ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={handleProductDashboardClick}
        >
          Productos
        </button>
        <button
          className={`p-2 text-white ${
            isClientsClicked ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={handleUserDashboardClick}
        >
          Usuarios
        </button>
      </aside>
      <div className="mt-8">
        {isProductsClicked ? <DashboardProducts products={products} /> : null}
        {isClientsClicked ? <DashboardUsers /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
