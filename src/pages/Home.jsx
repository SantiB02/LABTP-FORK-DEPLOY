import { useContext } from "react";
import { ProductList } from "./components/ProductList";

import React from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { userContext } from "../contexts/UserContext";

export const Home = ({ products, changeFilters }) => {
  
  const { user } = useContext(userContext);
  console.log("El usuario es este objeto:", user);

  return (
    <>
      {Object.keys(user).length > 0 && (
        <div className="flex bg-secondary w-screen">
          <h1>{user && <p>Hola {user.email}</p>}</h1>
          {console.log(user.email)}
        </div>
      )}
      <div className="flex flex-row bg-blue-300">
        <div className="flex flex-col">
          <Header />
          <ProductList products={products} />
        </div>
        <Cart />
      </div>
    </>
  );
};
