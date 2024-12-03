// Importa los hooks useState y useEffect desde React
import { useState, useEffect } from "react";

// Importa el componente Link desde react-router-dom para crear enlaces de navegación
import { Link } from "react-router-dom";

// Importa la función buscar desde el archivo api.js
import { buscar } from "../api/api";

// Importa el archivo CSS que contiene los estilos para el componente ListCategories
import "../assets/css/blog.css";

// Define el componente funcional ListCategories
const ListCategories = () => {
  // Declara el estado 'categories' con un array vacío como valor inicial
  const [categories, setCategories] = useState([]);

  // Usa el hook useEffect para realizar una acción después de que el componente se monte
  useEffect(() => {
    // Llama a la función buscar para obtener las categorías y actualiza el estado
    buscar(`/categorias`, setCategories);
  }, []); // El array vacío como segundo argumento asegura que este efecto solo se ejecute una vez, al montar el componente

  // Renderiza una lista de categorías
  return (
    <ul className="category-list container flex">
      {
        // Mapea sobre el array de categorías y crea un enlace y un elemento de lista para cada una
        categories.map((category) => (
          // Crea un enlace dinámico basado en el id de la categoría
          <Link to={`/categoria/${category.id}`} key={category.id}>
            <li
              className={`category-list__category category-list__category--${category.id}`}
            >
              {category.nombre}
            </li>
          </Link>
        ))
      }
    </ul>
  );
};

// Exporta el componente ListCategories para poder ser utilizado en otras partes de la aplicación
export default ListCategories;
