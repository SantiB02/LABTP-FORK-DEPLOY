import { useReducer, useRef, useState, useEffect } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../../hooks/useCart";

export const ProductList = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <>
      <h1>Lista de productos</h1>
      <main className="w-full flex justify-center align-center">
        <ul className="grid gap-2 bg-secondary grid-cols-5">
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product);

            return (
              <>
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <p>{product.title}</p> - ${product.price}
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
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </main>
    </>
  );
};
