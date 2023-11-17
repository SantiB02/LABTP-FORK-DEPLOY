import { RemoveFromCartIcon, ClearCartIcon, CartIcon } from "./Icons";
import { useId, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useLogin } from "../../hooks/useLogin";
import { useSaleOrders } from "../../hooks/useSaleOrders";

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  //const [userId, setUserId] = useState("");
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  //const { user } = useLogin();
  const user = localStorage.getItem("user");

  let userId = "";
  if (user !== null) {
    const parsedUser = JSON.parse(user);
    userId = parsedUser.id;
  }

  const { addSaleOrder, handleSaleOrderState, saleOrders } = useSaleOrders();

  const [newSaleOrder, setNewSaleOrder] = useState({
    SaleOrderLines: [],
    PaymentMethod: 1,
    ClientId: userId,
  });

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handlePaymentMethodChange = (e) => {
    const paymentMethod = e.target.value;
    console.log("PAYMENT", paymentMethod);
    setNewSaleOrder((prevSaleOrder) => ({
      ...prevSaleOrder,
      PaymentMethod: parseInt(paymentMethod),
    }));
  };

  const handleSaleOrderCreate = () => {
    const saleOrderLines = [];

    cart.forEach((cartItem) => {
      console.log("ID DEL PRODUCTO SALE ORDER", cartItem.id);
      saleOrderLines.push({
        ProductId: cartItem.id,
        QuantityOrdered: cartItem.quantity,
      });
    });
    setNewSaleOrder((prevSaleOrder) => ({
      ...prevSaleOrder,
      SaleOrderLines: saleOrderLines,
      ClientId: userId,
    }));

    console.log("CLIENT ID", user.id);
    console.log("ID DEL LOCAL", userId);
    console.log("SALE ORDER A MANDAR", newSaleOrder);
    addSaleOrder(newSaleOrder);
    handleSaleOrderState([...saleOrders, newSaleOrder]);
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
      <li className="border-b-2">
        <img className="aspect-auto w-screen w-12" src={imageLink} alt={name} />
        <div>
          <p>{name}</p> - ${price}
        </div>
        <footer className="flex gap-3 justify-center align-center">
          <small>Qty:{quantity}</small>
          <button className="p-3" onClick={addToCart}>
            +
          </button>
          <button className="p-3" onClick={removeFromCart}>
            Quitar de la lista
          </button>
        </footer>
      </li>
    );
  };

  const cartCheckboxId = useId();
  return (
    <>
      <label className="" htmlFor={cartCheckboxId} onClick={toggleCart}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden checked={isCartOpen} />

      <aside
        className={`bg-secondary p-2 right-0 top-20 w-[200px] max-h-full overflow-auto ${
          isCartOpen ? "fixed" : "hidden"
        }`}
      >
        <button className="fixed bg-red-500 right-2" onClick={toggleCart}>
          X
        </button>
        <button className="p-3" onClick={clearCart}>
          <ClearCartIcon />
        </button>

        <ul>
          {cart.map((product) => {
            console.log("KEY", product.id);
            return (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
                removeFromCart={() => removeFromCart(product)}
              />
            );
          })}
        </ul>
        {user ? (
          <>
            <label htmlFor="paymentMethod">Ingrese su medio de pago:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              onChange={handlePaymentMethodChange}
            >
              <option value="1">Tarjeta de Débito</option>
              <option value="2">Tarjeta de Crédito</option>
              <option value="3">Billetera Virtual</option>
            </select>
            <button onClick={handleSaleOrderCreate}>Comprar</button>
          </>
        ) : null}
      </aside>
    </>
  );
};
