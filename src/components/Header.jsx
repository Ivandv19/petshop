// Importa la imagen de un archivo SVG ubicado en la carpeta de assets
import image from "../assets/img/doguito.svg";

// Importa el archivo CSS que contiene los estilos para el componente Header
import "../assets/css/componentes/header.css";

// Importa el componente Link desde react-router-dom para crear enlaces de navegación
import { Link } from "react-router-dom";

// Define el componente funcional Header
const Header = () => {
  return (
    // Define la etiqueta header con clases para aplicar estilos específicos
    <header className="header_container">
      {/* Contenedor para el ícono de menú hamburguesa */}
      <div className="menu-hamburguer">
        <span className="menu-hamburguer__icon"></span>
      </div>
      {/* Contenedor principal del header */}
      <div className="header-container">
        {/* Enlace que redirige a la página principal */}
        <Link to="/" className="flex flex--center">
          {/* Imagen del logo del sitio */}
          <img className="header__logo" src={image} alt="doguito" />
          {/* Título del sitio */}
          <h1 className="header__title">Petshop</h1>
        </Link>
      </div>
      {/* Navegación del header */}
      <nav className="menu-header">
        {/* Lista de elementos del menú */}
        <ul className="menu-items">
          {/* Cada elemento de la lista es un enlace a diferentes secciones */}
          <li>
            <Link className="menu-item menu-item--entrar" to="#">
              Entrar
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="#">
              Productos
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/sobre">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      {/* Fondo del menú header */}
      <div className="menu-header-background"></div>
    </header>
  );
};

// Exporta el componente Header para poder ser utilizado en otras partes de la aplicación
export default Header;
