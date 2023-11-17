import { useContext } from "react";
import { ProductList } from "./components/ProductList";

import React from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { UserContext } from "../contexts/UserContext";
import { Offers } from "./components/Offers";
import AllProducts from "./components/AllProducts";

export const Home = ({ products, user }) => {
  // const { user } = useContext(UserContext);

  return (
    <>
      {/* {Object.keys(user).length > 0 && (
        <div className="flex bg-secondary w-screen">
          <h1>{user && <p>Hola {user.email}</p>}</h1>
        </div>
      )} */}
      <div className="flex flex-row bg-blue-300">
        <div className="flex flex-col">
          <Header />
          <AllProducts products={products} />
          <Offers products={products} />
        </div>
        <Cart user={user} />
      </div>
    </>
  );
};
