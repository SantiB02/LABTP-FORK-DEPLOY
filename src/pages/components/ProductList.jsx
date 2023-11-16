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
        <ul className="grid gap-2 bg-secondary grid-cols-5">
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product);

            return (
              <li key={product.id}>
                <img src={product.imageLink} alt={product.name} />
                <p>{product.name}</p>
                <select name="color" onChange={handleColorChange}>
                  <option value="1">Rojo</option>
                  <option value="2">Azul</option>
                  <option value="3">Verde</option>
                </select>
                <select name="size" onChange={handleSizeChange}>
                  <option value="1">S</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                </select>
                <p>- ${product.price}</p>
                <button
                  className={`p-2 rounded-xl ${
                    isProductInCart ? "bg-red-500" : "bg-red-200"
                  }`}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
