import { useState, createContext, useEffect } from "react";
import RegisteredUsersJson from "../mocks/users.json";
import { useLogin } from "../hooks/useLogin";

export const UserContext = createContext();
export const userToggleContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const userInfo = localStorage.getItem("user");

  useEffect(() => {
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
