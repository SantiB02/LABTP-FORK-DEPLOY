import { RemoveFromCartIcon, ClearCartIcon, CartIcon } from "./Icons";
import { useId, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useLogin } from "../../hooks/useLogin";

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  const { user } = useLogin();
  console.log(user);

  const userId = "";
  if (user) {
    const userId = user.id;
  }

  const [newSaleOrder, setNewSaleOrder] = useState({
    SaleOrderLines: [],
    PaymentMethod: "",
    ClientId: userId,
  });

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handlePaymentMethodChange = (e) => {
    const paymentMethod = e.target.value;
    setNewSaleOrder((prevSaleOrder) => ({
      ...prevSaleOrder,
      PaymentMethod: paymentMethod,
    }));
  };

  const handleSaleOrderCreate = () => {
    const saleOrderLines = [];
    console.log("CARRITO A BUSCAR", cart);
    cart.forEach((cartItem) => {
      saleOrderLines.push({
        ProductId: cartItem.id,
        QuantityOrdered: cartItem.quantity,
      });
    });
    setNewSaleOrder((prevSaleOrder) => ({
      ...prevSaleOrder,
      SaleOrderLines: saleOrderLines,
    }));
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
