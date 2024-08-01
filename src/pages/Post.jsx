// Importa los estilos CSS para el componente Post
import "../assets/css/componentes/card.css"

import { buscar } from "../api/api"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

// Define el componente funcional Post
const Post = ({ url }) => {
    // Declara el estado 'post' con un objeto vacío como valor inicial

    const [post, setPost] = useState({})

    // Obtiene el parámetro de ruta 'id' usando useParams
    const { id } = useParams()

    // Obtiene la función 'navigate' de useNavigate para la navegación programática
    const navigate = useNavigate()


    // Usa el hook useEffect para realizar una acción cuando cambie el 'id' o al montar el componente
    useEffect(() => {

        // Llama a la función buscar para obtener los detalles del post usando el 'id' y actualiza el estado
        buscar(`/posts/${id}`, setPost)
            .catch(() => {
                // Si no se encuentra el post, redirige a la página de error
                navigate("/not-found")
            })
    }, [id, navigate]) // El hook se ejecuta cada vez que cambia el 'id' o 'navigate'

    // Renderiza el componente Post
    return (
        <main className="container flex flex--center">
            {/* Card que muestra los detalles del post */}
            <article className="card post">
                {/* Título del post */}
                <h2 className="post-card__title">{post.title}</h2>
                {/* Cuerpo del post */}
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

// Exporta el componente Post para poder ser utilizado en otras partes de la aplicación
export default Post