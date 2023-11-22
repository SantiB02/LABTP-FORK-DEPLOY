import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export const MyOrders = ({ user }) => {
  const [showSaleOrderLines, setShowSaleOrderLines] = useState(false);

  const handlePaymentMethod = (order) => {
    //mapeo el string del método de pago según el valor del enum del back-end. Se ejecuta directamente en el elemento a renderizar
    switch (order.paymentMethod) {
      case 0:
        return "Tarjeta de débito";
      case 1:
        return "Tarjeta de crédito";
      case 2:
        return "Billetera virtual";
      default:
        return "ERROR!";
    }
  };

  const handleOrderDate = (order) => {
    const monthsInSpanish = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    const orderDate = new Date(order.orderDate);
    const year = orderDate.getFullYear();
    const month = monthsInSpanish[orderDate.getMonth()];
    const day = orderDate.getDate();

    return `${day} de ${month} de ${year}`;
  };

  const handleSaleOrderLines = () => {
    setShowSaleOrderLines(!showSaleOrderLines);
  };

  console.log(
    "ORDERS RECIBIDAS",
    JSON.parse(localStorage.getItem("userSaleOrders"))
  );

  //si no está logueado o no es cliente, no renderiza el componente:
  if (!user || user?.userType !== "Client") {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div>
        <h1>Tus pedidos</h1>
        <ul>
          {JSON.parse(localStorage.getItem("userSaleOrders")).map((order) => {
            return (
              <li key={order.id} className="my-5 bg-teal-900 p-2">
                <p>Código: {order.orderCode}</p>
                <p>Método de pago: {handlePaymentMethod(order)}</p>
                <p>Fecha: {handleOrderDate(order)}</p>
                <p>Precio total: {order.totalPrice}$</p>
                <p>
                  Estado:{" "}
                  {order.completed ? (
                    <span>COMPLETADA</span>
                  ) : (
                    <span>EN PROCESO</span>
                  )}
                </p>
                <button
                  onClick={handleSaleOrderLines}
                  className="my-2 border border-white p-2 mx-3"
                >
                  {showSaleOrderLines
                    ? "Ocultar detalles de compra"
                    : "Ver detalles de compra"}
                </button>
                {showSaleOrderLines ? (
                  <ul>
                    {order.saleOrderLines.map((saleOrderLine) => {
                      const discount =
                        saleOrderLine.product.price *
                        (saleOrderLine.product.discount / 100);
                      const priceWithDiscount =
                        saleOrderLine.product.price - discount.toFixed(2);
                      return (
                        <li
                          key={saleOrderLine.id}
                          className="my-3 p-3 border border-black border-dashed"
                        >
                          <img
                            className="w-10"
                            src={saleOrderLine.product.imageLink}
                            alt="producto comprado"
                          />
                          <p>Nombre: {saleOrderLine.product.name}</p>
                          <p>Precio unitario: {saleOrderLine.product.price}$</p>
                          {saleOrderLine.product.discount > 0 && (
                            <>
                              <p>
                                Descuento: {saleOrderLine.product.discount}%
                              </p>
                              <p>Precio con descuento: {priceWithDiscount}$</p>
                            </>
                          )}
                          <p>Cantidad: {saleOrderLine.quantityOrdered}</p>
                          <p>
                            Subtotal:{" "}
                            {saleOrderLine.product.discount > 0
                              ? priceWithDiscount *
                                saleOrderLine.quantityOrdered
                              : saleOrderLine.product.price *
                                saleOrderLine.quantityOrdered}
                            $
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
