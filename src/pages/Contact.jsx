import React from "react";

export const Contact = () => {
  return (
    <div className="h-[75vh]">
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
      <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="mb-1">Nombre:</span>
          <input
            type="text"
            name="name"
            className="border border-gray-300 p-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Email:</span>
          <input
            type="text"
            name="email"
            className="border border-gray-300 p-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Mensaje:</span>
          <textarea
            name="message"
            rows="4"
            className="border border-gray-300 p-2"
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
