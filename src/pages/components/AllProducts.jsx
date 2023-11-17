import React from "react";
import { ProductList } from "./ProductList";

const AllProducts = ({ products }) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
