import Header from "./components/Header";
import Peticion from "./components/Peticion";
import Response from "./components/Response";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <div className="contentContainer">
          <h2 className="sub-title">USO</h2>
          <p className="description">
            Recupera una frase aleatoria del comandante en
            formato JSON.
          </p>
          <Peticion
            link={"https://ricardofort.herokuapp.com/"}
          />
          <p className="description">
            Respuesta de ejemplo
          </p>
          <Response />
          <p className="description">
            Recupera todas las frases del comandante.
          </p>
          <Peticion
            link={"https://ricardofort.herokuapp.com/all"}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
