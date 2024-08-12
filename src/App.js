// Importa los estilos CSS base y componentes necesarios
import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

// Define el componente funcional App
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

// Exporta el componente App para ser utilizado en otras partes de la aplicación
export default App;
