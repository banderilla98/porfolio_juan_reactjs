import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection/CoreConceptsSection.jsx";
import ExamplesSection from "./components/ExamplesSection/ExamplesSection.jsx";
import Game from './components/TicTacToe/Game.jsx'
import { TodoList } from "./components/TodoList/TodoList.jsx";

function App() {
  return (
    <>
      <Header />

      <Hero />

      <CoreConceptsSection />
      <ExamplesSection />

      <Game/>

      <TodoList/>




      
    </>
  );
}

export default App;
