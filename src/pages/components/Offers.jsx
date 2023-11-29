import React, { useState } from "react";
import { ProductList } from "./ProductList";

export const Offers = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const discountedProducts = products.filter((product) => product.discount > 0);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 rounded-md ml-5 my-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={handleButtonClick}
      >
        {isOpen ? "Ocultar ofertas" : "Mostrar ofertas"}
      </button>
      {isOpen && <ProductList products={discountedProducts} />}
    </div>
  );
};
