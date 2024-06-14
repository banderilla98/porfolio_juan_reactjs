import '../Header/Header.css'

const reactTitulos = ["React fundamentos", "React Base", "React Principios"];

function titulosRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Header() {
  const tituloGanador = reactTitulos[titulosRandom(0, 2)];

  return (
    <header>
      <h1>Titulos - - {tituloGanador}</h1>
      <p>Aqui vamos a poner el cuadro del header</p>
    </header>
  );
}
