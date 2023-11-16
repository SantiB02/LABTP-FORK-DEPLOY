import React, { useState } from "react";
import { ProductList } from "./ProductList";

export const Offers = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const discountedProducts = products.filter((product) => product.discount > 0);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isOpen ? "Ocultar ofertas" : "Mostrar ofertas"}
      </button>
      {isOpen && <ProductList products={discountedProducts} />}
    </div>
  );
};
