import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data";

export default function ExamplesSection() {
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
    <section id="reactExamples">
      <h2>Ejemplos React</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClickMenu("components")}
        >
          Componentes
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleClickMenu("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClickMenu("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClickMenu("state")}
        >
          Estados
        </TabButton>
      </menu>
      <h1>Contenido Dinamico</h1>
      {selectedTopic}
      {tabContent}
      <hr /> //linea normal line
    </section>
  );
}
