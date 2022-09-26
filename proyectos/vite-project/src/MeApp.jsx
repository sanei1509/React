// Importamos componentes dentro de nuestra app principal
import RandomBlock from "./RandomBlock";
// import fetch from "node-fetch";

// const getImagen = async () => {
//   try {
//     const apiKey = "4uBgjzYouKN5LxDJ1sFuzcfzQ8aVHDrE";
//     const resp = await fetch(
//       `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
//     );
//     const { data } = await resp.json();
//     // DESTRUCTURING DE URL
//     const { url } = data.images.original;

//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   } catch (error) {
//     // manejo del error
//     console.error(error);
//     return "No se encontro la imagen";
//   }
// };

// creamos un componente
const App = ({ msg = "hola no llego nada !!" }) => {
  return (
    <div>
      {/* <h1>Hola, desde mi MeApp.jsx</h1> */}
      {/* <h2>Además</h2> */}
      <RandomBlock />
      getImagen()
    </div>
  );
};

export default App;
