// Importa los estilos CSS base y componentes necesarios
import './assets/css/base/base.css';
import './assets/css/componentes/card.css'

// Importa los componentes de las páginas y componentes necesarios
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404';
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

// Importa los componentes y hooks necesarios desde react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

// Define el componente funcional App
function App() {
  return (
    <>
      {/* Configuración del enrutador */}
      <Router>
        {/* Componente del encabezado que se muestra en todas las páginas */}
        <Header />

        {/* Definición de rutas usando el componente Routes */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path='/' element={<Home />} />

          {/* Ruta para la página 'Sobre' */}
          <Route path='/sobre' element={<Sobre />} />

          {/* Ruta para la página de detalles de un post */}
          <Route path='/posts/:id' element={<Post />} />

          {/* Ruta para la página de categoría */}
          <Route path='/categoria/:id/*' element={<Categoria />} />

          {/* Ruta para manejar cualquier otra ruta no definida */}
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

// Exporta el componente App para ser utilizado en otras partes de la aplicación
export default App;
