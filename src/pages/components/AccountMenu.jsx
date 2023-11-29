import { useState, useEffect, useContext } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate, Navigate } from "react-router-dom";
import { UpdateAccount } from "./UpdateAccount";
import Swal from "sweetalert2";
import { useUser } from "../../hooks/useUser";

export const AccountMenu = ({ user }) => {
  const [updatedUser, setUpdatedUser] = useState(user);
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

  const handleUpdatedUser = (updatedUser) => {
    console.log("Nuevos datos de uploaded user", updatedUser);
    setUpdatedUser(updatedUser);
  };

  useEffect(() => {
    setUpdatedUser(updatedUser);
  }, [updatedUser]);

  if (!user) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div className="h-[100%] p-4 flex justify-center items-center flex-col w-90 min-h-[85vh]">
        <h1 className="text-3xl font-bold mb-4">
          ¡Bienvenido {updatedUser.name} {updatedUser.lastName}!
        </h1>
        <p className="text-white">Su correo es: {user.email}</p>
        <p className="text-white">
          Su tipo de usuario es:{" "}
          {user.userType === "Client" ? "Cliente" : user.userType}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2"></h2>
          </div>
        </div>
        <UpdateAccount user={user} handleUpdatedUser={handleUpdatedUser} />
        <button
          onClick={() => handleDeletePopUp()}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4 w-[10vh] h-[auto]"
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
