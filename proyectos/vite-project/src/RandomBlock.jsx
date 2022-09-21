import PropTypes from "prop-types";

export default function RandomBlock(props) {
  // espacio para la lógica
  const name = "Natalia";
  const surname = "Oreiro";
  const fullName = name + " " + surname;
  //   ¿ se puede mostrar un objeto en el dom?
  const infoUser = {
    name: "Natalia",
    surname: "Oreiro",
    location: "Argrentina",
    born_country: "Uruguay",
    age: 40,
  };

  // props DESTRUCTURING
  const { fraseCitada } = props;

  return (
    <div className="container">
      <h1>Welcome {fullName}!!</h1>

      {/* info del user registrado */}
      <h3>información sobre nuevo usuario:</h3>
      <div className="json-container">
        <code>{JSON.stringify(infoUser)}</code>
      </div>

      {/* frase seleccionada por la user */}
      <h2>Frase Célebre</h2>
      <p>"{fraseCitada}"</p>
    </div>
  );
}

// Fijamos los tipos de data que vamos a recibir por props
RandomBlock.propTypes = {
  fraseCitada: PropTypes.string,
};

// establecemos valor por defecto de nuestras props
RandomBlock.defaultProps = {
  fraseCitada: "No tiene frase celébre",
};
