import React from "react";
import { DeleteProduct } from "./DeleteProduct";
import { CreateProduct } from "./CreateProduct";
import { UpdateProduct } from "./UpdateProduct";

export const ProductActions = ({ productList }) => {
  return (
    <>
      <CreateProduct />
      <UpdateProduct productList={productList} />
      <DeleteProduct productList={productList} />
    </>
  );
};
