import React from "react";
import { useNavigate } from "react-router-dom";

export const IncorrectRoute = () => {
  const navigate = useNavigate();

  const handleNewDirection = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl mb-4">
        ¡La ruta es incorrecta! Vuelve a la pantalla principal.
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNewDirection}
      >
        Ir a la pantalla principal
      </button>
    </div>
  );
};
