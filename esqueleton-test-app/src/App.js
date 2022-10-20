import "./App.css";
import ContentLoader from "react-content-loader";

function App(props) {
  return (
    <div className="App">
      <h1>Esqueleton Test App</h1>
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#404040"
        foregroundColor="#ecebeb"
        {...props}
      >
        <circle cx="37" cy="151" r="23" />
        <rect x="80" y="140" rx="2" ry="2" width="140" height="12" />
        <rect x="79" y="164" rx="2" ry="2" width="140" height="11" />
        <rect x="10" y="193" rx="2" ry="2" width="470" height="177" />
        <rect x="12" y="392" rx="0" ry="0" width="93" height="17" />
        <rect x="131" y="408" rx="0" ry="0" width="29" height="0" />
        <rect x="292" y="389" rx="0" ry="0" width="108" height="17" />
      </ContentLoader>
    </div>
  );
}

export default App;
