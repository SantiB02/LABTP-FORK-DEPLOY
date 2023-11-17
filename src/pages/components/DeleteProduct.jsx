import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const DeleteProduct = ({ productList }) => {
  const [productListToDelete, setProductListToDelete] = useState([productList]);

  const { removeProduct, fetchProducts } = useProducts();

  return (
    <>
      {productListToDelete.map((product) => {
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
