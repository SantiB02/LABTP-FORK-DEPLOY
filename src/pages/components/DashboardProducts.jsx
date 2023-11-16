import React from "react";

const DashboardProducts = ({ products }) => {
  return (
    <div>
      <h2>Gestión de productos</h2>
      <ul className="flex">
        {products.map((product) => {
          return (
            <li className="flex-row" key={product.id}>
              <img
                className="w-16"
                src={product.imageLink}
                alt="productImage"
              />
              <p>Código: {product.code}</p>
              <p>{product.name}</p>
              <p>${product.price}</p>
              {product.discount > 0 && <p>Descuento: {product.discount}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardProducts;
