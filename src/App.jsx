import React from "react";
import "./App.css";
import { NavBar } from "./pages/components/NavBar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { UserProvider } from "./contexts/userContext";
import { Login } from "./pages/components/Login";
import ProductListJson from "./mocks/products.json";
import { useState } from "react";
import { Footer } from "./pages/components/Footer";
import { FiltersContext } from "./contexts/filters";
import { useContext } from "react";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./contexts/cart";

export const userContext = React.createContext();

function App() {
  const [productList] = useState(ProductListJson.products);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(productList);

  return (
    <>
      <div className="bg-background-cream">
        <UserProvider>
          <Login />
          <Register />
          <NavBar />
          <CartProvider>
            <Home products={filteredProducts} />
          </CartProvider>
          <Contact />
          <Footer />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
