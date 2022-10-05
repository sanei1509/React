// Función para ir a obtener la data de los gifs

export const gifExtract = async (tema) => {
  try {
    const url_giphy = `https://api.giphy.com/v1/gifs/search?api_key=QWOqCNOlk5FuPBQPQNXJwwgMIijFgDCo&q=${tema}&limit=5`;
    // Necesitamos trabajar la respuesta de la API
    const res = await fetch(url_giphy);

    const { data } = await res.json(); // extraemos los datos de la respuesta revisar en insomia de donde sale data
    const formatData = data.map((conjunto) => ({
      img: conjunto.images.downsized_medium.url,
      title: conjunto.title,
      id: conjunto.id,
    }));

    return formatData;
  } catch (error) {
    console.log(error);
  }
};
