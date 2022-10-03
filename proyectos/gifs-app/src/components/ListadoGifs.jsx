const ListadoGifs = ({ key, tema }) => {
  const gifs = [1, 2, 3, 4, 5];

  return (
    <>
      <h3 className="text-3xl font-bold">{tema}</h3>
      {gifs.map((gif) => (
        <p>{gif}</p>
      ))}
    </>
  );
};

export default ListadoGifs;
