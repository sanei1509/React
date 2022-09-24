// ESTE COMPONENTE ES EL CONTENEDOR DE NUESTRA APP
import { useState } from "react";

export const AppContainer = () => {
  // incializamos las categorías con un hook para poder modificar
  const [temas, setTemas] = useState(["hola", "hola2", "hola3"]);
  return (
    <div>
      <h1>Busca tus gifs favoritos aqui !</h1>

      {/* INPUT DE BUSQUEDA */}

      {/* LISTAMOS TODOS LOS GIF CORRESPONDIENTES A LA BUSQUEDA */}
      <ol>
        {temas.map((tema) => {
          return <li>Hola</li>;
        })}
      </ol>
    </div>
  );
};
