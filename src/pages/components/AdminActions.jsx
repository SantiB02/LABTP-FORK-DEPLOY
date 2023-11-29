import { useState, useEffect } from "react";
import { useAdmin } from "../../hooks/useAdmin";

export const AdminActions = () => {
  const [adminModal, setAdminModal] = useState(false);
  const [clientModal, setClientModal] = useState(false);
  const [seeClients, setSeeClients] = useState(false);

  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    lastname: "",
    usertype: "admin",
  });

  const { createNewAdmin, getAllClients, clients } = useAdmin();

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
  const handleSeeClients = () => {
    setSeeClients(!seeClients);
  };

  useEffect(() => {
    handleGetAllClients();
  }, [clientModal]);

  return (
    <>
      <section className="mt-[10px]">
        <button
          onClick={handleAdminModal}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Crear un nuevo admin
        </button>
        {adminModal && (
          <>
            <h2 className="text-2xl font-bold my-2">Complete el formulario</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-black"
            >
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={newAdmin.email}
                onChange={handleOnChange}
                className="border p-2"
              />
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={newAdmin.name}
                onChange={handleOnChange}
                className="border p-2"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Apellido"
                value={newAdmin.lastname}
                onChange={handleOnChange}
                className="border p-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={newAdmin.password}
                onChange={handleOnChange}
                className="border p-2"
              />
              <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={newAdmin.username}
                onChange={handleOnChange}
                className="border p-2"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Enviar
              </button>
            </form>
          </>
        )}
      </section>

      <section className="my-4">
        <button
          onClick={handleClientModal}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Ver lista de clientes
        </button>
        {clientModal && (
          <>
            {clientModal && (
              <>
                {clients
                  ? clients.map((client) => (
                      <div key={client.id} className="my-4">
                        <ul className="border p-2 bg-[#151130] rounded-xl min-w-[50vw] justify-center flex flex-col items-center mb-5">
                          <li>Nombre de usuario: {client.userName} </li>
                          <li>Nombre: {client.name} </li>
                          <li>Apellido: {client.lastName} </li>
                          <li>Email: {client.email} </li>
                        </ul>
                      </div>
                    ))
                  : null}
              </>
            )}
          </>
        )}
      </section>
    </>
  );
};
