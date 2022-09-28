export const AddTopic = () => {
  const handlerInputTopic = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Busca tus gifs por temas"
        onChange={handlerInputTopic}
      />
    </div>
  );
};
