import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { useState } from "react";

export const UpdateProduct = ({ productList }) => {
  console.log("productlist", productList);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [updateModal, setUpdateModal] = useState(false);

  const { updateProduct } = useProducts();

  const handleUpdateModal = () => {
    setUpdateModal(!updateModal);
  };

  const handleUpdateProduct = () => {
    updateProduct(updatedProduct);
  };

  return (
    <>
      {productList.map((product) => {
        return (
          <div className="flex flex-col">
            <h1>{product.name}</h1>
            <button
              onClick={() => {
                handleUpdateModal();
                setUpdatedProduct(product);
              }}
            >
              Actualizar este producto
            </button>
          </div>
        );
      })}
      {updateModal && (
        <div className="flex flex-col">
          <h1>Actualizar producto</h1>
          <input
            type="text"
            placeholder="Nombre del producto"
            onChange={(e) => {
              setUpdatedProduct({ ...updatedProduct, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Precio del producto"
            onChange={(e) => {
              setUpdatedProduct({ ...updatedProduct, price: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Descripción del producto"
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
                description: e.target.value,
              });
            }}
          />
          <input
            type="text"
            placeholder="Link de la imagen"
            onChange={(e) => {
              setUpdatedProduct({
                ...updatedProduct,
                imageLink: e.target.value,
              });
            }}
          />{" "}
          <button
            onClick={() => {
              handleUpdateProduct();
              handleUpdateModal();
            }}
          >
            Finalizar cambios
          </button>
        </div>
      )}
    </>
  );
};
