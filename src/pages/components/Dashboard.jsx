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
    <div>
      <h1>Dashboard</h1>
      <aside className="flex flex-col">
        <button className="self-start" onClick={handleProductDashboardClick}>
          Productos
        </button>
        <button className="self-start" onClick={handleUserDashboardClick}>
          Usuarios
        </button>
      </aside>
      <div>
        {isProductsClicked ? <DashboardProducts /> : null}
        {isClientsClicked ? <DashboardUsers /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
