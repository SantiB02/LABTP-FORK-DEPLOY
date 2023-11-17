import React, { useContext, useState } from "react";
import { ModalWrapper, ModalContent } from "./styledComponents/Modals";
import { userContext } from "../../contexts/UserContext";
import { useLogin } from "../../hooks/useLogin";
import { CreateProduct } from "./CreateProduct";
import { DeleteProduct } from "./DeleteProduct";
import { useNavigate } from "react-router-dom";

export const Login = ({ newLogin }) => {
  const { login, logout, user } = useLogin();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPopUpActive, setIsPopUpActive] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    setIsPopUpActive(false);
    newLogin();
  };

  const handlePopUp = () => {
    setIsPopUpActive(true);
  };

  const handleCloseSession = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="bg-transparent">
        {user ? (
          <button onClick={() => handleCloseSession()}>Cerrar sesion</button>
        ) : (
          <button onClick={handlePopUp}>Iniciar Sesión</button>
        )}
      </div>
      {isPopUpActive ? (
        <ModalWrapper>
          <div className="h-[200px] flex flex-col align-middle justify-around bg-yellow-300 mb-5">
            <h2>Iniciar Sesión</h2>
            <form className="flex flex-col w-100 " onSubmit={handleSubmit}>
              <div className="flex justify-around">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex justify-around">
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
          </div>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Login;
