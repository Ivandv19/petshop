// Importa los hooks useState y useEffect desde React
import { useState, useEffect } from "react";

// Importa el archivo CSS que contiene los estilos para el componente Categoria
import "../assets/css/blog.css";

// Importa la función buscar desde el archivo api.js
import { buscar } from "../api/api";

// Importa el componente ListCategories desde su ubicación
import ListCategories from "../components/ListCategories";

// Importa el componente ListPosts desde su ubicación
import ListPosts from "../components/ListPost";

// Importa los hooks useParams, Routes y Route desde react-router-dom
import { useParams, Routes, Route } from "react-router-dom";

// Importa el componente Link y useResolvedPath desde react-router-dom
import { Link, useResolvedPath } from "react-router-dom";

// Importa el componente SubCategoria desde su ubicación
import SubCategoria from "./SubCategoria";

// Define el componente funcional Categoria
const Categoria = () => {
  // Obtiene el parámetro de ruta 'id' usando useParams
  const { id } = useParams();

  // Declara el estado 'subcategorias' con un array vacío como valor inicial
  const [subcategorias, setSubcategorias] = useState([]);

  // Obtiene la URL resuelta usando useResolvedPath
  const url = useResolvedPath("").pathname;

  // Usa el hook useEffect para realizar una acción cuando cambie el 'id' o al montar el componente
  useEffect(() => {
    // Llama a la función buscar para obtener las subcategorías de la categoría específica usando el 'id'
    buscar(`/categorias?id=${id}`, (response) => {
      // Actualiza el estado 'subcategorias' con las subcategorías obtenidas del servidor
      setSubcategorias(response[0].subcategorias);
    });
  }, [id]); // El hook se ejecuta cada vez que cambia el 'id'

  // Renderiza el componente Categoria
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet Noticias</h2>
      </div>

      {/* Renderiza el componente ListCategories */}
      <ListCategories />

      {/* Renderiza una lista de subcategorías */}
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategoria}
          >
            {/* Crea un enlace dinámico basado en la subcategoría y la URL actual */}
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>

      {/* Renderiza las rutas anidadas */}
      <Routes>
        {/* Define la ruta para mostrar los posts de la categoría */}
        <Route
          path="/"
          element={<ListPosts url={`/posts?categoria=${id}`} />}
        />

        {/* Define la ruta para las subcategorías */}
        <Route path="/:subcategoria" element={<SubCategoria />} />
      </Routes>
    </main>
  );
};

// Exporta el componente Categoria para poder ser utilizado en otras partes de la aplicación
export default Categoria;
