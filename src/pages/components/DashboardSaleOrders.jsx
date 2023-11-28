import React, { useState } from "react";
import { useSaleOrders } from "../../hooks/useSaleOrders";
import { useNavigate } from "react-router-dom";

export const DashboardSaleOrders = ({ allSaleOrders }) => {
  const [orderDetailsVisibility, setOrderDetailsVisibility] = useState([]);

  const { completeSaleOrder, deleteSaleOrder } = useSaleOrders();

  const navigate = useNavigate();

  console.log("ORDERS EN DASHBOARD", allSaleOrders);

  const mapPaymentMethod = (order) => {
    //mapeo el string del método de pago según el valor del enum del back-end. Se ejecuta directamente en el elemento a renderizar
    switch (order.paymentMethod) {
      case 1:
        return "Tarjeta de débito";
      case 2:
        return "Tarjeta de crédito";
      case 3:
        return "Billetera virtual";
      default:
        return "ERROR!";
    }
  };

  const mapOrderDate = (order) => {
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

  const handleSaleOrderLines = (orderId) => {
    setOrderDetailsVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      const index = newVisibility.indexOf(orderId);

      if (index !== -1) {
        // La orden está actualmente visible, ocultarla
        newVisibility.splice(index, 1);
      } else {
        // La orden está oculta, mostrarla
        newVisibility.push(orderId);
      }

      return newVisibility;
    });
  };

  const markOrderAsCompleted = (orderId) => {
    completeSaleOrder(orderId);
    navigate("/dashboard");
  };

  const saleOrderDelete = (orderId) => {
    deleteSaleOrder(orderId);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Órdenes de venta de clientes</h2>
      {allSaleOrders.length > 0 ? (
        <ul>
          {allSaleOrders.map((order) => {
            return (
              <li key={order.id} className="my-5 bg-teal-900 p-2">
                <p>Código: {order.orderCode}</p>
                <p>Método de pago: {mapPaymentMethod(order)}</p>
                <p>Fecha: {mapOrderDate(order)}</p>
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
                  onClick={() => handleSaleOrderLines(order.id)}
                  className="my-2 border border-white p-2 mx-3"
                >
                  {orderDetailsVisibility.includes(order.id)
                    ? "Ocultar detalles de compra"
                    : "Ver detalles de compra"}
                </button>
                {!order.completed && (
                  <button
                    className="my-2 border border-white p-2 mx-3"
                    onClick={() => markOrderAsCompleted(order.id)}
                  >
                    Marcar como completada
                  </button>
                )}
                <button
                  className="my-2 border border-white p-2 mx-3"
                  onClick={() => saleOrderDelete(order.id)}
                >
                  Eliminar orden
                </button>
                {orderDetailsVisibility.includes(order.id) ? (
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
      ) : (
        <p className="my-3 underline underline-offset-4">
          Ningún cliente ha comprado en su tienda :(
        </p>
      )}
    </div>
  );
};
