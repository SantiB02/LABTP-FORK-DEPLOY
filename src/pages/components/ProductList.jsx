import { useReducer, useRef, useState, useEffect } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../../hooks/useCart";

export const ProductList = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
  };

  return (
    <>
      <h1>Lista de productos</h1>
      <main className="w-full flex justify-center align-center">
        <ul className="flex flex-row justify-center ">
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product);

            return (
              <li
                key={product.id}
                className="m-5 flex flex-col justify-center align-middle"
              >
                <img
                  className="w-[30vh] h-[30vh]"
                  src={product.imageLink}
                  alt={product.name}
                />
                <h2 className="text-[25px] self-center m-5">{product.name}</h2>
                <select
                  className="bg-[#121212] mb-2"
                  name="color"
                  onChange={handleColorChange}
                >
                  <option value="1">Rojo</option>
                  <option value="2">Azul</option>
                  <option value="3">Verde</option>
                </select>
                <select
                  className="bg-[#121212]"
                  name="size"
                  onChange={handleSizeChange}
                >
                  <option value="1">S</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                </select>
                <p className="text-[25px] self-center m-5"> ${product.price}</p>
                <button
                  className={`p-5 w-[10vh] h-[10vh] self-center  rounded-xl ${
                    isProductInCart ? "bg-red-500" : "bg-blue-500"
                  }`}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? (
                    <div className="text-black text-center ml-1">
                      <RemoveFromCartIcon />{" "}
                    </div>
                  ) : (
                    <div className="text-black text-center ml-1">
                      <AddToCartIcon />
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
