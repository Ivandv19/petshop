// Importa el hook useParams desde react-router-dom para obtener el parámetro de ruta
import { useParams } from "react-router-dom"

// Importa el componente ListPost desde su ubicación
import ListPost from "../components/ListPost"

// Define el componente funcional SubCategoria
const SubCategoria = () => {
    // Obtiene el parámetro de ruta 'subcategoria' usando useParams
    const { subcategoria } = useParams()

    // Renderiza el componente ListPost para mostrar los posts de la subcategoría específica
    return (
        <ListPost url={`/posts?subcategoria=${subcategoria}`} />
    )
}

// Exporta el componente SubCategoria para poder ser utilizado en otras partes de la aplicación
export default SubCategoria