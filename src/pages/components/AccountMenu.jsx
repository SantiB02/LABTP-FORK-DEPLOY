import { useState, useEffect, useContext } from "react";
import { useLogin } from "../../hooks/useLogin";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { UpdateAccount } from "./UpdateAccount";
import Swal from "sweetalert2";
import { useUser } from "../../hooks/useUser";

export const AccountMenu = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const { getUserInfo } = useLogin();
  const { deleteUserAccount } = useUser();
  const [deletePopUp, setDeletePopUp] = useState(false);
  const navigate = useNavigate();

  const handleDeletePopUp = () => {
    Swal.fire({
      title: "Perfecto!",
      text: "Seguro quiere borrar su cuenta?",
      confirmButtonText: "Si :(",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteAccountConfirm();
      }
    });
  };
  const handleDeleteAccountConfirm = () => {
    deleteUserAccount();
  };

  if (!user) {
    navigate("/");
  } else
    return (
      <div>
        <h1>Bienvenido</h1>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address}</p>
        <p>{user.city}</p>
        <p>{user.province}</p>
        <p>{user.country}</p>
        <p>{user.postalCode}</p>
        <UpdateAccount user={user} />
        <button onClick={() => handleDeletePopUp()}>
          Quiero borrar mi cuenta!
        </button>
      </div>
    );
};

// <div>
//   Bienvenido
//   <h1>AccountMenu</h1>
//   <p>Datos del usuario logueado</p>
//   <p>Editar datos</p>
//   <p>Eliminar cuenta</p>
// </div>
// );
