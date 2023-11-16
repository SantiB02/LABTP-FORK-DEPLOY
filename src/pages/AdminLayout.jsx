import React from "react";
import { AdminActions } from "./components/AdminActions";
import { useState } from "react";
import { ProductActions } from "./components/ProductActions";

export const AdminLayout = ({ products }) => {
  const [adminModal, setAdminModal] = useState(false);
  const [productModal, setProductModal] = useState(false);

  return (
    <>
      <div style={{ width: "50vw", height: "50vh", opacity: "0.6" }}>
        <h1>Admin Layout</h1>

        <h2>Productos</h2>
        <ProductActions productList={products} />
        <h2>Usuarios</h2>
        <AdminActions />
      </div>
    </>
  );
};
