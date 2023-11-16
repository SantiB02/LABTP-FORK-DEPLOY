import React from "react";
import "./App.css";
import { NavBar } from "./pages/components/NavBar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/components/Login";
import ProductListJson from "./mocks/products.json";
import { Footer } from "./pages/components/Footer";
//import { FiltersContext } from "./contexts/FiltersContext";
//import { useContext } from "react";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";
import { getProducts } from "./api/product.api";
import { useProducts } from "./hooks/useProducts";
import { DeleteProduct } from "./pages/components/DeleteProduct";

function App() {
  const { filterProducts } = useFilters();
  const { products } = useProducts();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <div className="bg-background-cream">
        <UserProvider>
          <DeleteProduct productList={filteredProducts} />

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
