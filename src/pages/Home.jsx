import { useUserContext, useUserToggleContext } from "../contexts/userContext";
import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Login } from "./components/Login";

import React from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

export const Home = ({ products, changeFilters }) => {
  const user = useUserContext();
  const handleLogin = useUserToggleContext();

  return (
    <>
      <div className="flex bg-secondary w-screen justify-between">
        <h1>{user && <p>Hola {user.name}</p>}</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="flex flex-row bg-blue-300">
        <div clasName="flex flex-col">
          <Header />
          <ProductList products={products} />
        </div>
        <Cart />
      </div>
    </>
  );
};
