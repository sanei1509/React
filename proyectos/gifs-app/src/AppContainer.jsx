// ESTE COMPONENTE ES EL CONTENEDOR DE NUESTRA APP
import { useState } from "react";

// componentes personalizados
import { AddTopic } from "./components/AddTopic";
import "./style.css";

export const AppContainer = () => {
  // incializamos las categorías con un hook para poder modificar
  const [temas, setTemas] = useState(["Familia", "Amigos", "Descontrol!"]);

  const handlerTopic = () => {
    console.log("Hoola");
    // setTemas([...temas, "Te Quiero!"]);
  };

  return (
    <div className="max-w-4xl m-auto content-center text-center mt-4">
      <h1 className="text-3xl font-mono">Busca tus gifs favoritos aqui !</h1>
      <AddTopic setTemas={setTemas} añadidos={temas} />
      {/* INPUT DE BUSQUEDA */}

      {/* LISTAMOS TODOS LOS GIF CORRESPONDIENTES A LA BUSQUEDA */}

      <button
        className="inline-flex items-center justify-center rounded-md bg-slate-800 mt-2 pr-10 pl-10 pb-2 pt-2 text-gray-100 hover:bg-black hover:text-whit focus:outline-none"
        aria-expanded="false"
        onClick={handlerTopic}
      >
        Añadir
      </button>
      {/* LISTADO */}
      <ol className="mt-10">
        {temas.map((tema) => {
          return (
            <li className="font-extra-bold font-medium text-xl">{tema}</li>
          );
        })}
      </ol>
    </div>
  );
};
