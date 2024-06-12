import "./App.css";
import Hero from "./sections/Hero/Hero";
import { CORE_CONCEPTS } from "./data.js";

function CoreConcepts({imagePath, title, description}) {
  return (
    <div>
      <img src={imagePath} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Hero />

      <section id="coreConcepts">
        <h2>Principales Caracteristicas</h2>
        <div>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>

        </div>

      </section>
    </div>
  );
}

export default App;
