import { useState } from "react";

export const AddTopic = ({ onNewTopic }) => {
  // estado del input & handler
  const [inputValue, setInputValue] = useState("");

  const handlerInputSearch = (e) => {
    // Seteamos el valor de inputValue
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setInputValue([...añadidos, inputValue]);
    if (inputValue.trim().length < 2) return;

    // setTemas([inputValue, ...añadidos]); esta función la vamos a realizar en main function
    onNewTopic(inputValue);
    // dejo la función limpia para cuando se vuelva a ejecutar
    // no olvidemos que le seteamos el valor al contenido por atributos al input
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 mt-5 rounded-lg text-sm focus:outline-none"
          type="text"
          placeholder="Busca tus gifs por temas"
          onChange={handlerInputSearch}
        />
      </form>
    </div>
  );
};
