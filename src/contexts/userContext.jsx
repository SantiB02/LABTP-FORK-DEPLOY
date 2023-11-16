import React, { useState, createContext } from "react";
import RegisteredUsersJson from "../mocks/users.json";
import { useLogin } from "../hooks/useLogin";

export const UserContext = createContext();
export const userToggleContext = createContext();

export function UserProvider({ children }) {
  const { user } = useLogin();
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
