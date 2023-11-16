import React from "react";
import { useProducts } from "../../hooks/useProducts";

export const DeleteProduct = ({ productList }) => {
  const { removeProduct } = useProducts();

   
  return (
    <>
      {productList.map((product) => {
        return (
          <div className="flex flex-col">
            <h1>{product.name}</h1>
            <button
              onClick={() => {
                removeProduct(product.id);
              }}
            >
              Eliminar producto
            </button>
          </div>
        );
      })}
    </>
  );
};
