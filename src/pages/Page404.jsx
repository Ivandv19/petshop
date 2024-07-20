// Importa la imagen de un archivo SVG ubicado en la carpeta de assets
import image from "../assets/img/doguito404.svg"

// Importa el archivo CSS que contiene los estilos para la página de error 404
import '../assets/css/404.css'

// Define el componente funcional Page404
const Page404 = () => {
    return (
        // Contenedor principal centrado vertical y horizontalmente
        <main className="container flex flex--center flex--column">
            {/* Imagen de un perro */}
            <img className="dog-image" src={image} alt="Doguito" />

            {/* Mensaje de texto indicando que la página no existe */}
            <p className="notfound-text">Esta página no existe</p>
        </main>
    )
}

// Exporta el componente Page404 para poder ser utilizado en otras partes de la aplicación
export default Page404