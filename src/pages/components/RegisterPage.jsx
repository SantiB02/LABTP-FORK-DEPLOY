import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export const RegisterPage = () => {
  const [userName, setUsername] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [name, setName] = useState("");

  const { registerNewUser } = useLogin();

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };
  const userLastnameHandler = (event) => {
    setUserLastname(event.target.value);
  };
  const userEmailHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const userPasswordHandler = (event) => {
    setUserPassword(event.target.value);
  };
  const userAddressHandler = (event) => {
    setUserAddress(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (e) => {
    registerNewUser({
      username: userName,
      lastName: userLastname,
      email: userEmail,
      password: userPassword,
      address: userAddress,
      name: name,
    });
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-2">Registrate</h2>
      <p className="text-gray-600 mb-4"></p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre de usuario:
          </label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={userNameHandler}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="userLastname"
            className="block text-sm font-medium text-gray-600"
          >
            Apellido:
          </label>
          <input
            id="userLastname"
            type="text"
            value={userLastname}
            onChange={userLastnameHandler}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={nameHandler}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={userEmail}
            onChange={userEmailHandler}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className=" block text-sm font-medium text-gray-600"
          >
            Dirección:
          </label>
          <input
            id="address"
            type="text"
            value={userAddress}
            onChange={userAddressHandler}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Contraseña:
          </label>
          <input
            id="password"
            type="password"
            value={userPassword}
            onChange={userPasswordHandler}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <button
          className="bg-secondary text-white p-2 rounded-md"
          type="submit"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};
