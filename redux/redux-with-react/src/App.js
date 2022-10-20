import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Reducers</h1>
      <ol>
        <li>Reducers are pure functions</li>
        <li>Reducers are not allowed to change state or action</li>
        <li>Reducers must be pure</li>
      </ol>
      <ol>
        <li>No debe de tener efectos secundarios</li>
        <li>No debe de tener efectos secundarios</li>
        <li>Debe de retornar siempre un estado nuevo</li>
      </ol>
    </div>
  );
}

export default App;
