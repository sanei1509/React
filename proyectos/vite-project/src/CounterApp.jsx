import PropTypes from "prop-types";

export default function CounterApp({ valor }) {
  return (
    <div>
      <h1>CounterApp</h1>
      <h1>{valor}</h1>
    </div>
  );
}

CounterApp.propTypes = {
  valor: PropTypes.number.isRequired,
};
