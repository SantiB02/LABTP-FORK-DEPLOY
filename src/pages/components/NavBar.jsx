import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useUser } from "../../hooks/useUser";

export const NavBar = ({ updateUser, user, userLogged }) => {
  const [clicked, setClicked] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (navigateTo) => {
    navigate(`/${navigateTo}`);
  };

  return (
    <>
      <NavContainer showShadow={showShadow} clicked={clicked}>
        <h2 style={{ cursor: "pointer" }} onClick={() => handleLinkClick("")}>
          Lorem <span>Lingerie</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick={() => handleLinkClick("")}>Home</a>

          {user?.userType === "Admin" || user?.userType === "SuperAdmin" ? (
            <a onClick={() => handleLinkClick("dashboard")}>Dashboard</a>
          ) : null}
          {user ? (
            <a onClick={() => handleLinkClick("myaccount")}>Mi cuenta</a>
          ) : null}
          <a onClick={() => handleLinkClick("about")}>Sobre nosotros</a>
          {!user ? (
            <a onClick={() => handleLinkClick("register")}>Registrarse</a>
          ) : null}

          <a onClick={() => handleLinkClick("contact")}>Contacto</a>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
      <BgDiv className={`initial${clicked ? " active" : ""}`}></BgDiv>
    </>
  );
};

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 1.5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-top: 1rem;
    margin-right: 1rem;
    border: 2px solid gray;
    cursor: pointer;
  }
  .links {
    position: absolute;
    top: 0;
    left: -100%; /* Cambiar la posición inicial a -100% para ocultar el menú */
    width: 80%; /* Ajustar el ancho del menú según tus preferencias */
    height: 100%;
    background-color: transparent;

    text-align: center;
    transition: all 0.5s ease;
    z-index: 0;
    a {
      color: white;
      font-size: 2rem;
      display: block;
      padding: 1rem;
      box-shadow: ${(props) =>
        props.showShadow && !props.clicked
          ? "0 2px 4px rgba(0, 0, 0, 0.2)"
          : "none"}; /* Aplicar sombra solo cuando el menú está cerrado en pantallas grandes */
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
        box-shadow: none; /* Eliminar la sombra en pantallas grandes */
      }
      display: block;
      width: auto; /* Ajustar el ancho para pantallas más grandes */
      left: 0; /* Mostrar el menú completamente en pantallas más grandes */
      opacity: 1; /* Asegurar que el menú esté visible */
    }
  }
  .links.active {
    left: 0; /* Mostrar el menú deslizándolo a la posición 0 en pantallas pequeñas */
    box-shadow: ${(props) =>
      props.clicked
        ? "0 2px 4px rgba(0, 0, 0, 0.2)"
        : "none"}; /* Agregar sombra cuando el menú está abierto en pantallas pequeñas */
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
  /* Agregar una sombra de caja debajo del navbar si showShadow es true */
  box-shadow: ${(props) =>
    props.showShadow && !props.clicked
      ? "0 2px 4px rgba(0, 0, 0, 0.2)"
      : "none"}; /* Aplicar sombra solo cuando el menú está cerrado en pantallas grandes */
`;

const BgDiv = styled.div`
  background-color: #fff9fb;
  position: absolute;
  top: 0;
  left: 0;
  width: 0; /* Cambia el ancho a 0 para ocultar inicialmente el menú */
  height: 100%;
  z-index: -1;
  border: 2px solid gray; /* Cambia el color a gris y aplica un borde a todos los lados */
  transition: none; /* Elimina la transición */

  &.active {
    width: 100%; /* Ancho al 100% cuando está activo */
  }
`;
