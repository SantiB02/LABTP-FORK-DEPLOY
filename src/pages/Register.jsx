import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import {
  ModalWrapper,
  ModalContent,
} from "./components/styledComponents/Modals";

export const Register = () => {
  const [isPopUpActive, setIsPopUpActive] = useState(false);

  const handleRegister = () => {
    setIsPopUpActive(true);
  };

  const PopUpActiveHandler = (value) => {
    setIsPopUpActive(value);
  };

  return (
    <>
      <div>
        <button onClick={handleRegister}>Registrarse</button>
      </div>
      {isPopUpActive ? (
        <ModalWrapper>
          <ModalContent>
            <RegisterForm setIsPopUpActive={PopUpActiveHandler} />
          </ModalContent>
        </ModalWrapper>
      ) : null}
    </>
  );
};
