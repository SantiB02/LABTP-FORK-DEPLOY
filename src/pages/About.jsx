export const About = () => {
  return (
    <div className="flex justify-center items-center h-[75vh]">
      <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <img
            src="https://i.etsystatic.com/26382526/r/il/7823da/2809011895/il_570xN.2809011895_1wpe.jpg"
            alt="Leandro Cabral Santana"
            className="w-40 h-40 object-cover mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-bold">Leandro Cabral Santana</h2>
          <p>Programador de Front-End especializado en React y más.</p>
          <p>Tecnologías: React, JavaScript, HTML, CSS, etc.</p>
        </div>

        <div className="text-center">
          <img
            src="https://i.ytimg.com/vi/r0O_69z-Gus/hqdefault.jpg"
            alt="Santiago Brasca"
            className="w-40 h-40 object-cover mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-bold">Santiago Brasca</h2>
          <p>
            Especializado en Back-End con experiencia en varias tecnologías.
          </p>
          <p>Tecnologías: Node.js, Express, MongoDB, etc.</p>
        </div>

        <div className="text-center">
          <img
            src="https://i.pinimg.com/474x/0f/1a/e5/0f1ae5ea862366b9f1e7ff19d1b5b15f.jpg"
            alt="Ezequiel Coria"
            className="w-40 h-40 object-cover mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-bold">Ezequiel Coria</h2>
          <p>Fullstack estudiando tanto Back como Front.</p>
          <p>Tecnologías: Node.js, React, MongoDB, etc.</p>
        </div>
      </div>
    </div>
  );
};
