import { useState } from "react";
import { useUser } from "../../hooks/useUser";
const { useNavigate } = require("react-router-dom");

export const UpdateAccount = ({ user }) => {
  const [updatedUser, setUpdatedUser] = useState({
    username: user.username,
    name: user.name,
    lastname: user.lastName,
    password: user.password,
    address: user.address,
  });

  const navigate = useNavigate();

  const { updateUser } = useUser();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(updatedUser);
    navigate("/");
  };

  return (
    <section>
      <h2>¿Quieres cambiar datos de tu cuenta?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={updatedUser.username}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={updatedUser.name}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={updatedUser.lastname}
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={updatedUser.password}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Direccion"
          value={updatedUser.address}
          onChange={handleOnChange}
        />
        <button type="submit">Actualizar datos</button>
      </form>
    </section>
  );
};
