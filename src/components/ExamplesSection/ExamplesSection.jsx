import TabButton from "../../components/TabButton/TabButton.jsx";
import TabsMenu from "../TabsMenu/TabsMenu.jsx";
import Section from "../Section/Section.jsx";
import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import "./ExamplesSection.css";

export default function ExamplesSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleClickMenu(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(`Ey! Estas pulsando el botón ${selectedTopic}`);
  }
  console.log("El componente App esta siendo renderizado y ejecutado!!");

  let tabContent = (
    <>
    <p>
      Aquí se va a mostrar información sobre una característica de React, para
      ello elige una opción del menú
    </p>
    
    <hr />

    <p> Aqui nomas toy viendo si puedo aprender el tic tac toe del react documentation lol</p>

    </>
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
    <Section title="Ejemplos React" id="reactExamples" className="miClase">
      <TabsMenu
        buttons={
          <>
            <TabButton onClick={() => handleClickMenu("components")}>
              Componentes
            </TabButton>
            <TabButton onClick={() => handleClickMenu("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClickMenu("props")}>
              Props
            </TabButton>
            <TabButton onClick={() => handleClickMenu("state")}>
              Estados
            </TabButton>
          </>
        }
      >
        {tabContent}
      </TabsMenu>
      <menu></menu>
    </Section>
  );
}
