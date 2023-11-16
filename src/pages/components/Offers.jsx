import React, { useState } from 'react';

export const Offers = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const discountedProducts = products.filter(product => product.discount);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {isOpen ? 'Ocultar ofertas' : 'Mostrar ofertas'}
      </button>
      {isOpen && (
        <div>
          <h2>Ofertas</h2>
          {discountedProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} /> 
              <p>{product.description}</p>
              <p>Precio: {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};