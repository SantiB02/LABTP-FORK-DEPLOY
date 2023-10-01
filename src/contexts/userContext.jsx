import React, { useState, useContext } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useUserToggleContext() {
  return useContext(userToggleContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const changeLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: "Juan", email: "juanmail@mail.com" });
    }
  };

  const handleLogin = () => {
    changeLogin();
  };

  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={handleLogin}>
        {children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}
