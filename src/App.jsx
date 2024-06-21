import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  function handleClickMenu(selectedButton) {
    return console.log(`Estas pulsando el boton... ${selectedButton}`);
  }

  return (
    <div>
      <Header />

      <Hero />

      <section id="coreConcepts">
        <h2>Principales Caracteristicas</h2>
        <div>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </div>
      </section>

      <section id="reactExamples">
        <h2>Ejemplos React</h2>
        <menu>
          <TabButton onClick={()=>handleClickMenu("Componentes")}>Componentes</TabButton>
          <TabButton onClick={()=>handleClickMenu("Jsx")}>JSX</TabButton>
          <TabButton onClick={()=>handleClickMenu("Pros")}>Props</TabButton>
          <TabButton onClick={()=>handleClickMenu("Estados")}>Estados</TabButton>
        </menu>
        Contenido dinamico
      </section>
    </div>
  );
}

export default App;
