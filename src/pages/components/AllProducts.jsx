import React from "react";
import { ProductList } from "./ProductList";

const AllProducts = ({ products }) => {
  return (
    <div>
      <h1>Todos los productos</h1>
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
