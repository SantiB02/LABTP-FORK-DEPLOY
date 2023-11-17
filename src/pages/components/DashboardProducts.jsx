import React, { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { ModalWrapper, ModalContent } from "./styledComponents/Modals";
import { useState } from "react";
import { CreateProduct } from "./CreateProduct";

export const DashboardProducts = ({ products }) => {
  const [dashboardProductList, setDashboardProductList] = useState(products);
  const { getProductList } = useProducts();
  if (!products) {
    getProductList();
  }

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
    setDashboardProductList((prevList) =>
      prevList.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsPopUpActive(false);
  };
  const handleCreateProduct = (newProduct) => {
    setDashboardProductList(newProduct);
  };

  useEffect(() => {
    setDashboardProductList(products);
  }, [products]);

  console.log(dashboardProductList);

  return (
    <>
      <CreateProduct
        products={products}
        handleProducts={handleProductState}
        handleProductList={handleCreateProduct}
      />
      <div className="flex justify-center mt-8">
        <ul className="flex flex-col w-full space-y-4">
          {dashboardProductList.map((product) => (
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
                  }}
                >
                  Actualizar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => {
                    removeProduct(product.id);
                    setDashboardProductList((prevList) =>
                      prevList.filter(
                        (productFromList) => productFromList.id !== product.id
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
            <div className="flex flex-col  text-white w-[100%] h-[45%]">
              <h1 className="text-white bg-[#121212] text-[25px]">
                Actualizar producto
              </h1>
              <input
                className="text-white bg-[#121212] mb-2 mt-5"
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
                className="text-white bg-[#121212] mb-2"
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
                className="text-white bg-[#121212] mb-2"
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
                className="text-white bg-[#121212] mb-5"
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
                className="text-white bg-[#121212] mb-2 text-[20px] rounded-xl bg-black-200"
                onClick={() => {
                  handleUpdateProduct();
                }}
              >
                Finalizar cambios
              </button>
              <button
                className="text-white bg-blue-500 mb-2 text-[20px] rounded-xl"
                onClick={handleCloseModal}
              >
                Cancelar
              </button>
            </div>
          </ModalContent>
        </ModalWrapper>
      ) : null}
    </>
  );
};
