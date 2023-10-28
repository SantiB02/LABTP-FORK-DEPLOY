import React, { useState } from "react";
import { ModalWrapper, ModalContent } from "./styledComponents/Modals";

export const Login = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPopUpActive, setIsPopUpActive] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopUpActive(false);
  };

  const handleLogin = () => {
    setIsPopUpActive(true);
  };

  return (
    <>
      <div>
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
      {isPopUpActive ? (
        <ModalWrapper>
          <ModalContent>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Nombre de Usuario:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="btn bg-secondary rounded-[10px] "
                type="submit"
              >
                Iniciar Sesión
              </button>
            </form>
          </ModalContent>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Login;
