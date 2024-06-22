import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from 'react';
import { EXAMPLES } from "./data.js";

function App() {
  
  const [selectedTopic, setSelectedTopic] = useState(null); //siempre debe ir primero de nuestro componente react hooks


  function handleClickMenu(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(`Estas pulsando el boton... ${selectedTopic}`);
  }

  console.log("contenido renderizado");

  let tabContent = (
    <p>
      Aquí se va a mostrar información sobre una característica de React, para
      ello elige una opción del menú
    </p>
  );

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
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
          <CoreConcepts imagePath={CORE_CONCEPTS[3].imagePath}  title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}/>
        </div>
      </section>

      <section id="reactExamples">
        <h2>Ejemplos React</h2>
        <menu>
          <TabButton onClick={()=>handleClickMenu("components")}>Componentes</TabButton>
          <TabButton onClick={()=>handleClickMenu("jsx")}>JSX</TabButton>
          <TabButton onClick={()=>handleClickMenu("props")}>Props</TabButton>
          <TabButton onClick={()=>handleClickMenu("state")}>Estados</TabButton>
        </menu>
        <h1>Contenido Dinamico</h1>
        {selectedTopic}

        {tabContent}
        
        <hr />
      </section>
    </div>
  );
}

export default App;
