import React from "react";
import "./App.css";
import { NavBar } from "./pages/components/NavBar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { UserProvider } from "./contexts/userContext";

export const userContext = React.createContext();

function App() {
  return (
    <>
      <UserProvider>
        <Home />
        <NavBar />
        <Contact />
      </UserProvider>
    </>
  );
}

export default App;
