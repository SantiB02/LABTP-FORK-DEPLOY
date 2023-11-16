import React, { useContext, useState } from "react";
import { ModalWrapper, ModalContent } from "./styledComponents/Modals";
import { userContext } from "../../contexts/UserContext";
import { useLogin } from "../../hooks/useLogin";
import { CreateProduct } from "./CreateProduct";
import { DeleteProduct } from "./DeleteProduct";

export const Login = ({}) => {
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPopUpActive, setIsPopUpActive] = useState(false);

  const { user, handleUserLogin, closeSession } = useContext(userContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: email, password: password });
    setIsPopUpActive(false);
  };

  const handlePopUp = () => {
    setIsPopUpActive(true);
  };

  // const handleAddUser = () => {
  //   console.log("Estoi nose usa");
  //   setEmail(""); //Limpio los dos inputs luego de iniciar sesión
  //   setPassword("");
  //   const loginUser = { email, password };
  //   login(loginUser);
  // };

  const handleCloseSession = () => {
    closeSession();
  };

  return (
    <>
      <div>
        <button
          onClick={
            Object.keys(user).length > 0 ? handleCloseSession : handlePopUp
          }
        >
          {Object.keys(user).length > 0 ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
      </div>
      {isPopUpActive ? (
        <ModalWrapper>
          <ModalContent>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
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
                onClick={handlePopUp}
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
