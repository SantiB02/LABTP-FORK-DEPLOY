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

  console.log(user);

  if (!user) {
    navigate("/");
  } else {
    return (
      <div className="h-[75vh] p-4 flex justify-center items-center flex-col w-90">
        <h1 className="text-3xl font-bold mb-4">
          ¡Bienvenido {user.name} {user.lastName}!
        </h1>
        <p className="text-white">Su correo es: {user.email}</p>
        <p className="text-white">Su tipo de usuario es: {user.userType}</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2"></h2>
          </div>
        </div>
        <UpdateAccount user={user} />
        <button
          onClick={() => handleDeletePopUp()}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4 w-[20vh] h-[20vh]"
        >
          Quiero borrar mi cuenta
        </button>
      </div>
    );
  }
};

// <div>
//   Bienvenido
//   <h1>AccountMenu</h1>
//   <p>Datos del usuario logueado</p>
//   <p>Editar datos</p>
//   <p>Eliminar cuenta</p>
// </div>
// );
