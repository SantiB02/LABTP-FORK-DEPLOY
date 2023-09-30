import React from "react";
import "./App.css";
import { NavBar } from "./pages/components/NavBar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { UserProvider } from "./contexts/userContext";
import { Register } from "./pages/Register";

export const userContext = React.createContext();

function App() {
  return (
    <>
      <UserProvider>
        <NavBar />
        <Register />
      </UserProvider>
    </>
  );
}

export default App;
