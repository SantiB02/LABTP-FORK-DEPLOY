import { useState } from "react";
import { useAdmin } from "../../hooks/useAdmin";

export const AdminActions = () => {
  const [adminModal, setAdminModal] = useState(false);
  const [clientModal, setClientModal] = useState(false);

  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    lastname: "",
    usertype: "admin",
  });

  const { createNewAdmin, getAllClients } = useAdmin();

  const handleAdminModal = () => {
    setAdminModal(!adminModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se envió el formulario");
    createNewAdmin(newAdmin);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));
  };

  const handleClientModal = () => {
    setClientModal(!clientModal);
  };

  const handleGetAllClients = () => {
    getAllClients();
  };

  return (
    <>
      <button onClick={handleAdminModal}>Crear nuevo admin</button>
      {adminModal && (
        <>
          <h2>Crear nuevo admin</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={newAdmin.email}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={newAdmin.name}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Apellido"
              value={newAdmin.lastname}
              onChange={handleOnChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={newAdmin.password}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={newAdmin.username}
              onChange={handleOnChange}
            />
            <button type="submit">Crear nuevo admin</button>
          </form>
        </>
      )}
      <button onClick={() => handleClientModal()}>Ver lista de clientes</button>
      {clientModal && (
        <>
          <h2>Lista de clientes</h2>
          <button onClick={handleGetAllClients}>Ver lista de clientes</button>
        </>
      )}
    </>
  );
};
