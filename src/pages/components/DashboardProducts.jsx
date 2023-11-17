import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { ModalWrapper, ModalContent } from "./styledComponents/Modals";
import { useState } from "react";
import { CreateProduct } from "./CreateProduct";

export const DashboardProducts = ({ products }) => {
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [isPopUpActive, setIsPopUpActive] = useState(false);
  const { updateProduct, removeProduct, handleProductState } = useProducts();

  const handleUpdateModal = () => {
    setIsPopUpActive(true);
  };

  const handleCloseModal = () => {
    setIsPopUpActive(false);
  };

  const handleUpdateProduct = () => {
    updateProduct(updatedProduct);
    handleProductState(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsPopUpActive(false);
  };

  return (
    <>
      <CreateProduct products={products} handleProducts={handleProductState} />
      <div className="flex justify-center mt-8">
        <ul className="flex flex-col w-full space-y-4">
          {products.map((product) => (
            <li
              className="flex items-center justify-between p-4 bg-[#8b6e6e4d]  shadow-md rounded-md"
              key={product.id}
            >
              <img
                className="w-16 mr-3"
                src={product.imageLink}
                alt="productImage"
              />
              <div className="flex-1 mx-3">
                <p>Código: {product.code}</p>
                <p>{product.name}</p>
                <p>${product.price}</p>
                {product.discount > 0 && <p>Descuento: {product.discount}</p>}
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => {
                    handleUpdateModal();
                    setUpdatedProduct(product);
                    handleProductState(
                      products.map((product) =>
                        product.id === updatedProduct.id
                          ? updatedProduct
                          : product
                      )
                    );
                  }}
                >
                  Actualizar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => {
                    removeProduct(product.id);
                    handleProductState(
                      products.filter(
                        (productFromApi) => productFromApi.id !== product.id
                      )
                    );
                  }}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isPopUpActive ? (
        <ModalWrapper>
          <ModalContent>
            <div className="flex flex-col">
              <h1>Actualizar producto</h1>
              <input
                type="text"
                placeholder="Nombre del producto"
                onChange={(e) => {
                  setUpdatedProduct({
                    ...updatedProduct,
                    name: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Precio del producto"
                onChange={(e) => {
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  });
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
                }}
              >
                Finalizar cambios
              </button>
              <button onClick={handleCloseModal}>Cancelar</button>
            </div>
          </ModalContent>
        </ModalWrapper>
      ) : null}
    </>
  );
};
