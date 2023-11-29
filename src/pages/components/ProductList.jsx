import { useReducer, useRef, useState, useEffect } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../../hooks/useCart";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../constants/utils/motion";

export const ServiceCard = ({ products }) => {
  {
    products.map((product) => <ServiceCardItem product={product} />);
  }
};

const ServiceCardItem = ({ product }) => {
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
      >
        <img
          src={product.imageLink}
          alt={product.name}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {product.name}
        </h3>
      </div>
    </motion.div>
  </Tilt>;
};

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
      <h1 className="mb-5 mt-5">Lista de productos</h1>
      <main className="ml-5 w-full">
        <ul className="flex flex-row w-auto mr-6 ">
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product);

            return (
              <>
                <Tilt className="w-[90%] mr-2">
                  <motion.div
                    variants={fadeIn("left", "spring", 0.5 * 0.1, 0.75)}
                    className="w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card mr-10"
                  >
                    <div
                      options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                      }}
                      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
                    >
                      <img
                        src={product.imageLink}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded-xl"
                      />
                      <h3 className="text-white text-[18px] my-2 text-center">
                        {product.name}
                      </h3>
                      <select
                        className="bg-[#151030]  mb-2 min-w-[100px]"
                        name="color"
                        onChange={handleColorChange}
                      >
                        <option value="1">Rojo</option>
                        <option value="2">Azul</option>
                        <option value="3">Verde</option>
                      </select>
                      <select
                        className="bg-[#151030] rounded-xl mr-2 min-w-[100px]"
                        name="size"
                        onChange={handleSizeChange}
                      >
                        <option className="rounded-xl" value="1">
                          S
                        </option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                      </select>
                      <p className="text-[25px] self-center m-5">
                        {" "}
                        ${product.price}
                      </p>
                      <button
                        className={` w-[5vh] h-[5vh] self-center  rounded-xl ${
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
                    </div>
                  </motion.div>
                </Tilt>
                {/* <li
                  key={product.id}
                  className="m-5 flex flex-col justify-center "
                >
                  <img
                    className="w-[30vh] h-[30vh]"
                    src={product.imageLink}
                    alt={product.name}
                  />
                  <h2 className="text-[25px] self-center m-5">
                    {product.name}
                  </h2>
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
                  <p className="text-[25px] self-center m-5">
                    {" "}
                    ${product.price}
                  </p>
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
                      <div className="text-black text-center ml-3">
                        <RemoveFromCartIcon />{" "}
                      </div>
                    ) : (
                      <div className="text-black text-center ml-3">
                        <AddToCartIcon />
                      </div>
                    )}
                  </button>
                </li> */}
              </>
            );
          })}
        </ul>
      </main>
    </>
  );
};
