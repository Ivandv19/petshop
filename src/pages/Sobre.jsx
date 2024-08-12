import "../assets/css/componentes/Sobre.css"


// Define el componente funcional Sobre
const Sobre = () => {
  return (
    // Contenedor principal que envuelve todo el contenido
    <main className="mainContainer">
      <div className="container">
        {/* Título de la página */}
        <h2 className="title-page">Sobre Doguito</h2>
      </div>
      {/* Sección que contiene el contenido principal */}
      <section className="container flex flex--center">
        {/* Artículo que describe el propósito del blog */}
        <article className="card">
          El blog de PetShop fue creado para ayudarte con las preguntas más comunes sobre tu mascota.
        </article>
      </section>
    </main>
  )
}

// Exporta el componente Sobre para poder ser utilizado en otras partes de la aplicación
export default Sobre