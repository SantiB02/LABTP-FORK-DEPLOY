import { useContext } from "react";
import { ProductList } from "./components/ProductList";

import React from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { UserContext } from "../contexts/UserContext";
import { Offers } from "./components/Offers";
import AllProducts from "./components/AllProducts";

export const Home = ({ products, user }) => {
  return (
    <>
      <div className="flex flex-row bg-blue-900 justify-between">
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
