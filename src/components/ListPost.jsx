// Importa los hooks useState y useEffect desde React
import { useState, useEffect } from "react"

// Importa el archivo CSS que contiene los estilos para el componente ListPosts
import "../assets/css/componentes/card.css"

// Importa la función buscar desde el archivo api.js
import { buscar } from "../api/api"

// Importa el componente Link desde react-router-dom para crear enlaces de navegación
import { Link } from "react-router-dom"

// Define el componente funcional ListPosts que recibe la URL como prop
const ListPosts = ({ url }) => {

    // Declara el estado 'post' con un array vacío como valor inicial
    const [posts, setPosts] = useState([])

    // Usa el hook useEffect para realizar una acción cuando cambie la URL o al montar el componente
    useEffect(() => {
        // Llama a la función buscar para obtener los posts usando la URL proporcionada y actualiza el estado
        buscar(url, setPosts)
    }, [url]) // El hook se ejecuta cada vez que cambia la URL

    // Renderiza una sección que contiene los posts
    return (
        <section className="posts container">
            {
                // Mapea sobre el array de posts y crea un enlace y un artículo para cada uno
                posts.map(post => {
                    const { id, title, metadescription, categoria } = post
                    return (
                        // Crea un enlace dinámico basado en el id del post
                        <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                            <article>
                                <h3 className="post-card__title">
                                    {title}
                                </h3>
                                <p className="post-card__meta">{metadescription}</p>
                            </article>
                        </Link>
                    )
                })
            }
        </section>
    )
}

// Exporta el componente ListPosts para poder ser utilizado en otras partes de la aplicación
export default ListPosts