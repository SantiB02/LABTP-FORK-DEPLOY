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
    <section className="my-4">
      <h2 className="text-2xl font-bold mb-4">
        ¿Quieres cambiar datos de tu cuenta?
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={updatedUser.username}
          onChange={handleOnChange}
          className="border p-2"
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={updatedUser.name}
          onChange={handleOnChange}
          className="border p-2"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={updatedUser.lastname}
          onChange={handleOnChange}
          className="border p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={updatedUser.password}
          onChange={handleOnChange}
          className="border p-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={updatedUser.address}
          onChange={handleOnChange}
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Actualizar datos
        </button>
      </form>
    </section>
  );
};
