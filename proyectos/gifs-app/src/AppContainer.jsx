// ESTE COMPONENTE ES EL CONTENEDOR DE NUESTRA APP
import { useState } from "react";

// componentes personalizados
import { AddTopic } from "./components/AddTopic";

export const AppContainer = () => {
  // incializamos las categorías con un hook para poder modificar
  const [temas, setTemas] = useState(["hola", "hola2", "hola3"]);

  const handlerTopic = () => {
    console.log("Hoola");
    setTemas([...temas, "hola4"]); // añadimos un nuevo tema
  };

  return (
    <div>
      <h1>Busca tus gifs favoritos aqui !</h1>
      <AddTopic />
      {/* INPUT DE BUSQUEDA */}

      {/* LISTAMOS TODOS LOS GIF CORRESPONDIENTES A LA BUSQUEDA */}

      <button onClick={handlerTopic}>Añadir</button>
      <ol>
        {temas.map((tema) => {
          return <li>{tema}</li>;
        })}
      </ol>
    </div>
  );
};
