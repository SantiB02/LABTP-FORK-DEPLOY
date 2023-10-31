import React from "react";
import "./App.css";
import { NavBar } from "./pages/components/NavBar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { UserProvider } from "./contexts/UserContext";
import { Login } from "./pages/components/Login";
import ProductListJson from "./mocks/products.json";
import { Footer } from "./pages/components/Footer";
//import { FiltersContext } from "./contexts/FiltersContext";
//import { useContext } from "react";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./contexts/CartContext";

//export const userContext = React.createContext(); te olvidaste esta línea (?)

const productList = ProductListJson.products; //variable común ya que sólo la leemos. No necesitamos rastrearla con state
//la declaro fuera del componente para mejorar el rendimiento de la app, así no se evalúa con cada renderización

function App() {
  const { filterProducts } = useFilters();
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
