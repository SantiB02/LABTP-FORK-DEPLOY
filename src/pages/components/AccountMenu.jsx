import React from "react";
import { useLogin } from "../../hooks/useLogin";

export const AccountMenu = () => {
  const { user } = useLogin();

  return (
    <div>
      Bienvenido {user.name} {user.lastName}
      <h1>AccountMenu</h1>
      <p>Datos del usuario logueado</p>
      <p>Editar datos</p>
      <p>Eliminar cuenta</p>
    </div>
  );
};
