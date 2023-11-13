import React, { useState, createContext } from "react";
import RegisteredUsersJson from "../mocks/users.json";

export const userContext = createContext();
export const userToggleContext = createContext();

const registeredUsers = RegisteredUsersJson.users;

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  let loggedUserRole = ""; //creo una variable para almacenar el rol del usuario logueado y la paso por el Provider. Va a servir para renderizar cosas dependiendo del rol que tenga el usuario logueado.

  const handleUserLogin = (user) => {
    const foundUserIndex = registeredUsers.findIndex(
      (registeredUser) => user.email === registeredUser.email
    );
    if (
      foundUserIndex >= 0 &&
      registeredUsers[foundUserIndex].password === user.password
    ) {
      setUser(user); //guardo el usuario que se loguea (y ya está registrado)
      loggedUserRole = registeredUsers[foundUserIndex].role; //guardo el rol del usuario que se está logueando
      alert("Inicio de sesión exitoso. El usuario está registrado");
    } else {
      loggedUserRole = ""; //limpio el rol del usuario logueado
      alert(
        "El usuario ingresado no está registrado o los datos ingresados son incorrectos"
      ); //los alerts son para TESTEO. Habría que buscar opciones más cosméticas jeje
    }
  };

  const closeSession = () => {
    setUser({});
  };

  return (
    <userContext.Provider
      value={{ user, handleUserLogin, closeSession, loggedUserRole }}
    >
      {children}
    </userContext.Provider>
  );
}
