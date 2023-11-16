import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./pages/components/NavBar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/components/Login";
import ProductListJson from "./mocks/products.json";
import { Footer } from "./pages/components/Footer";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";
import { useProducts } from "./hooks/useProducts";
import { AdminLayout } from "./pages/AdminLayout";
import { About } from "./pages/About";

function App() {
  const { filterProducts } = useFilters();
  const { products } = useProducts();
  const filteredProducts = filterProducts(products);

  return (
    <Router>
      <div className="bg-background-cream">
        <UserProvider>
          <NavBar />

          <Routes>
            <Route
              path="/admin"
              element={<AdminLayout products={filteredProducts} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/"
              element={
                <CartProvider>
                  <Login />
                  <Home products={filteredProducts} />
                </CartProvider>
              }
            />
          </Routes>
          <Footer />
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
