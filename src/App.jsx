import { useState, useEffect } from "react";
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
import { useProducts } from "./hooks/useProducts";
import { AdminLayout } from "./pages/AdminLayout";
import { About } from "./pages/About";
import { useLogin } from "./hooks/useLogin";
import Dashboard from "./pages/components/Dashboard";
import { AccountMenu } from "./pages/components/AccountMenu";
import { UserProvider } from "./contexts/userContext";
import { RegisterPage } from "./pages/components/RegisterPage";
import { IncorrectRoute } from "./pages/components/IncorrectRoute";
import { MyOrders } from "./pages/components/MyOrders";
import { useUser } from "./hooks/useUser";

function App() {
  const { filterProducts } = useFilters();
  const { products, handleUpdateProduct } = useProducts();
  const filteredProducts = filterProducts(products);
  const [userLogged, setUserLogged] = useState(false);

  const { user } = useLogin();

  const handleNewLogin = () => {
    setUserLogged(true);
  };

  useEffect(() => {
    if (user) {
      setUserLogged(true);
    }
  }, [user]);

  return (
    <UserProvider>
      <Router>
        <div className="bg-[#121212] text-white w-[100%] flex flex-col justify-between overflow-x-hidden ">
          <NavBar user={user} userLogged={userLogged} />
          <div className="p-2 mb-10 flex flex-col  h-[100%] bg-[#121212] ">
            <Login newLogin={handleNewLogin} />

            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard products={products} user={user} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/myaccount" element={<AccountMenu user={user} />} />
              <Route path="/my-orders" element={<MyOrders user={user} />} />
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="/"
                element={
                  <CartProvider>
                    <Home products={filteredProducts} user={user} />
                  </CartProvider>
                }
              />
              <Route path="*" element={<IncorrectRoute />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
