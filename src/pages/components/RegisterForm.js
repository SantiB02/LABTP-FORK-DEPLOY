import React, { useState } from "react";

const RegisterForm = ({ setIsPopUpActive }) => {
  const [userName, setUsername] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopUpActive(false);
  };

  return (
    <div>
      <h2>Registrate</h2>
      <p>o Iniciar Sesión</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Nombre:</label>
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={userNameHandler}
        />
        <label htmlFor="userLastname">Apellido:</label>
        <input
          id="userLastname"
          type="text"
          value={userLastname}
          onChange={userLastnameHandler}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={userEmail}
          onChange={userEmailHandler}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          value={userPassword}
          onChange={userPasswordHandler}
        />
        <button className="btn bg-secondary rounded-[10px] " type="submit">
          Registarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
