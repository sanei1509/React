import { useState, useEffect } from "react";

export const FirstCustom = (tema) => {
  const [img, setImg] = useState([]);

  const getImages = async () => {
    const images = await fetch(
      `api.giphy.com/v1/gifs/search?api_key=QWOqCNOlk5FuPBQPQNXJwwgMIijFgDCo&q=Rick and Morty&limit=5`
    );
  };

  // Queremos obtener las imagenes solo una vez por renderizado
  useEffect(() => {
    getImages();
  }, []);

  return { images: [], cargandoContenido: false };
};
