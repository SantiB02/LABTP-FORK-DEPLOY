import React from "react";
import Swal from "sweetalert2";

const handleSubmit = (e) => {
  e.preventDefault();
  Swal.fire({
    icon: "success",
    title: "Mensaje enviado",
    text: "Te responderemos a la brevedad",
  });
};

export const Contact = () => {
  return (
    <div className="h-[75vh] flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-4">
        Puedes contactarnos a través de nuestro correo electrónico:
        <a
          className="text-blue-500 hover:underline ml-1"
          href="mailto:aprobanosGabi@gmail.com"
        >
          aprobanosGabi@gmail.com{" "}
        </a>
      </p>
      <p className="mb-4">
        También puedes dejarnos un mensaje y te contestaremos a la brevedad.
      </p>
      <form
        className="flex flex-col min-w-[50vw] justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span className="mb-1">Nombre:</span>
          <input
            type="text"
            name="name"
            className="border border-gray-300 p-2 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Email:</span>
          <input
            type="text"
            name="email"
            className="border border-gray-300 p-2 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Mensaje:</span>
          <textarea
            name="message"
            rows="4"
            className="border border-gray-300 p-2 text-black"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
