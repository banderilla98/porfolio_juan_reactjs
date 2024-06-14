import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero.jsx"
import CoreConcepts from "./components/CoreConcepts.jsx"
import { CORE_CONCEPTS } from "./data.js";


function App() {
  return (
    <div>
      <Header/>

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
