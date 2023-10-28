import React, { useState } from "react";

const Form = () => {
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

  return (
    <div>
      <h1>Registrate</h1>
      <p>o Iniciar Sesión</p>
      <label>Nombre:</label>
      <input type="text" value={userName} onChange={userNameHandler} />
      <label>Apellido:</label>
      <input type="text" value={userLastname} onChange={userLastnameHandler} />
      <label>Email:</label>
      <input type="email" value={userEmail} onChange={userEmailHandler} />
      <label>Contraseña:</label>
      <input
        type="password"
        value={userPassword}
        onChange={userPasswordHandler}
      />
    </div>
  );
};

export default Form;
