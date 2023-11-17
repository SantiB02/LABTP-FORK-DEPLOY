import React, { useContext, useState } from "react";
import { ModalWrapper, ModalContent } from "./styledComponents/Modals";
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
    window.location.reload();
  };

  return (
    <>
      <div className="bg-transparent m-2">
        {user ? (
          <button
            className="w-[100%] flex  justify-end"
            onClick={() => handleCloseSession()}
          >
            Cerrar sesion
          </button>
        ) : (
          <button onClick={handlePopUp}>Iniciar Sesión</button>
        )}
      </div>
      {isPopUpActive ? (
        <ModalWrapper>
          <div className="h-[35%] flex flex-col items-center justify-around bg-[#121212] p-5 w-[30%] rounded-xl">
            <h2 className="text-[25px]">Iniciar Sesión</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="flex justify-around mb-5">
                <label htmlFor="email">Email:</label>
                <input
                  className="ml-10"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex justify-around mb-5 ">
                <label className="mr-2" htmlFor="password">
                  Contraseña:
                </label>
                <input
                  className="ml-4 text-black"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="mt-1 btn h-[8vh] w-[40vh] bg-secondary rounded-[10px] "
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
