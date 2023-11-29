import { useContext } from "react";
import { ProductList } from "./components/ProductList";

import React from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Offers } from "./components/Offers";
import AllProducts from "./components/AllProducts";

export const Home = ({ products, user }) => {
  return (
    <>
      {user && (
        <div className="flex mb-5 ml-1 w-screen bg-[#150137]">
          <h1>{user && <p>¡Hola {user.name}!</p>}</h1>
        </div>
      )}
      <div className="flex flex-row bg-blue-900 justify-between min-h-[90vh]">
        <div className="flex flex-col m-2">
          <Header />
          <AllProducts products={products} />
          <Offers products={products} />
        </div>
        <Cart user={user} />
      </div>
    </>
  );
};
