import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Post from "./pages/Post";
import Categoria from "./pages/Categoria";
import Page404 from "./pages/Page404";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta raíz con componente App como contenedor */}
                <Route path="/" element={<App />}>
                    {/* Ruta por defecto */}
                    <Route index element={<Home />} />
                    {/* Ruta para la página "Sobre" */}
                    <Route path="/sobre" element={<Sobre />} />
                    {/* Ruta dinámica para un post específico */}
                    <Route path="/posts/:id" element={<Post />} />
                    {/* Ruta dinámica con subrutas para una categoría */}
                    <Route path="/categoria/:id/*" element={<Categoria />} />
                    {/* Ruta comodín para páginas no encontradas */}
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
