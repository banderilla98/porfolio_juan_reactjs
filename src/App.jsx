import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection/CoreConceptsSection.jsx";
import ExamplesSection from "./components/ExamplesSection/ExamplesSection.jsx";
import TicTacToe from './components/TicTacToe/TicTacToe.jsx'


function App() {
  return (
    <>
      <Header />

      <Hero />

      <CoreConceptsSection />
      <ExamplesSection />

      <TicTacToe/>

      
    </>
  );
}

export default App;
