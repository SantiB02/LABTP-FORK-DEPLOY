import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useSaleOrders } from "../../hooks/useSaleOrders";

export const MyOrders = ({ user }) => {
  const [orderDetailsVisibility, setOrderDetailsVisibility] = useState([]);
  const navigate = useNavigate();
  const { getClientSaleOrders } = useSaleOrders();

  useEffect(() => {
    getClientSaleOrders();
  }, []);

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

  const handleLinkClick = (navigateTo) => {
    navigate(`/${navigateTo}`);
  };

  //si no está logueado o no es cliente, no renderiza el componente:
  if (!user || user?.userType !== "Client") {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div className="ml-5 min-h-[85vh] h-[100%]">
        <h1 className="text-3xl font-bold mb-4">Tus pedidos</h1>
        {JSON.parse(localStorage.getItem("userSaleOrders"))?.length > 0 ? (
          <ul>
            {JSON.parse(localStorage.getItem("userSaleOrders")).map((order) => {
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
                            <p>
                              Precio unitario: {saleOrderLine.product.price}$
                            </p>
                            {saleOrderLine.product.discount > 0 && (
                              <>
                                <p>
                                  Descuento: {saleOrderLine.product.discount}%
                                </p>
                                <p>
                                  Precio con descuento: {priceWithDiscount}$
                                </p>
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
          <p className="my-3 underline">
            Aún no ha realizado ningún pedido. ¡Visite nuestro{" "}
            <span
              style={{ cursor: "pointer", color: "cyan" }}
              onClick={() => handleLinkClick("")}
            >
              catálogo
            </span>{" "}
            y comience a comprar ahora!
          </p>
        )}
      </div>
    );
  }
};
