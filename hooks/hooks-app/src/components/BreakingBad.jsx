import useFetch from "../hooks/useFetch";

const URL = "https://www.breakingbadapi.com/api/quote/random";

const BreakingBad = () => {
  const { data, loading, error } = useFetch(URL);
  console.log({ data, loading, error });

  if (loading)
    return (
      <div>
        <h3>Buscando info, espera aqui...</h3>
      </div>
    );

  const handlePhraseTrigger = () => {
    console.log("Pasando a la siguiente frase");
  };

  return (
    <div>
      <h2>Breaking Bad app</h2>
      <hr />
      {/*  ${data[0]["quote"]}`} */}
      {data[0]["author"]}
      <button onClick={handlePhraseTrigger}>Siguiente frase</button>
    </div>
  );
};

export default BreakingBad;
