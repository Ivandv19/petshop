// Importa el componente ListPosts desde su ubicación
import ListPosts from "../components/ListPost"

// Importa el componente ListCategories desde su ubicación
import ListCategories from "../components/ListCategories"

// Define el componente funcional Home
const Home = () => {
  return (
    <main>
      <div className="container">
        {/* Título de la página */}
        <h2 className="title-page">Pet noticias</h2>
      </div>

      {/* Renderiza el componente ListCategories para mostrar las categorías */}
      <ListCategories/>

      {/* Renderiza el componente ListPosts para mostrar los posts */}
      <ListPosts url={"/posts"} />
    </main>
  )
}

// Exporta el componente Home para poder ser utilizado en otras partes de la aplicación
export default Home