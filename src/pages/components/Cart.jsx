import { RemoveFromCartIcon, ClearCartIcon, CartIcon } from "./Icons";
import { useId, useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { useLogin } from "../../hooks/useLogin";
import { useSaleOrders } from "../../hooks/useSaleOrders";

export const Cart = ({ user }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(1);

  const { cart, removeFromCart, clearCart, addToCart } = useCart();

  const { addSaleOrder, handleSaleOrderState, saleOrders } = useSaleOrders();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSaleOrderCreate = () => {
    let saleOrderLines = [];
    cart.map((cartItem) => {
      saleOrderLines = [
        ...saleOrderLines,
        { productId: cartItem.id, quantityOrdered: cartItem.quantity },
      ];
    });
    addSaleOrder({
      saleOrderLines,
      paymentMethod,
      ClientId: user.id,
    });
    clearCart();
  };

  const CartItem = ({
    imageLink,
    price,
    name,
    quantity,
    addToCart,
    removeFromCart,
  }) => {
    return (
      <li className="border-b-2 p-2 md:p-4 flex flex-col items-center">
        <img
          className="w-[8vh] h-[8vh] md:w-[10vh] md:h-[10vh] mr-2 md:mr-4 object-cover"
          src={imageLink}
          alt={name}
        />
        <div className="flex-grow">
          <p className="text-md md:text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-500">${price}</p>
        </div>
        <div className="flex items-center space-x-2">
          <small className="text-gray-500">Qty: {quantity}</small>
          <button
            className="p-2 text-blue-500 hover:text-blue-700"
            onClick={addToCart}
          >
            +
          </button>
          <button
            className="p-2 text-red-500 hover:text-red-700"
            onClick={removeFromCart}
          >
            Quitar
          </button>
        </div>
      </li>
    );
  };

  const cartCheckboxId = useId();

  return (
    <>
      {!(user?.userType === "Admin" || user?.userType === "SuperAdmin") && (
        <>
          <label
            className="cursor-pointer mr-7"
            htmlFor={cartCheckboxId}
            onClick={toggleCart}
          >
            <CartIcon />
          </label>
          <input
            id={cartCheckboxId}
            type="checkbox"
            hidden
            checked={isCartOpen}
          />
          <aside
            className={`bg-gray-900 p-2 right-0 top-20 w-72 md:w-96 max-h-[70vh] overflow-auto overflow-y-scroll rounded-xl ${
              isCartOpen ? "fixed" : "hidden"
            }`}
          >
            <button className="fixed right-5 text-white" onClick={toggleCart}>
              X
            </button>
            <button className="p-2 md:p-3" onClick={clearCart}>
              <ClearCartIcon />
            </button>

            <ul>
              {cart.map((product) => (
                <CartItem
                  key={product.id}
                  {...product}
                  addToCart={() => addToCart(product)}
                  removeFromCart={() => removeFromCart(product)}
                />
              ))}
            </ul>
            {user && cart.length > 0 && (
              <>
                <div className="flex flex-col space-around">
                  <label
                    htmlFor="paymentMethod"
                    className="text-white mt-5 mb-5 block"
                  >
                    Ingrese su medio de pago:
                  </label>
                  <select
                    className="bg-gray-800 text-white p-2 rounded-md mb-5"
                    id="paymentMethod"
                    name="paymentMethod"
                    onChange={handlePaymentMethodChange}
                  >
                    <option value="1">Tarjeta de Débito</option>
                    <option value="2">Tarjeta de Crédito</option>
                    <option value="3">Billetera Virtual</option>
                  </select>
                  <button
                    className="bg-blue-500 text-white p-2 rounded-md "
                    onClick={handleSaleOrderCreate}
                  >
                    Comprar
                  </button>
                </div>
              </>
            )}
            {user && cart.length === 0 && (
              <p className="text-white">
                Recuerde que para comprar productos debe estar logueado y debe
                haber por lo menos un objeto en el carrito
              </p>
            )}
          </aside>
        </>
      )}
    </>
  );
};
