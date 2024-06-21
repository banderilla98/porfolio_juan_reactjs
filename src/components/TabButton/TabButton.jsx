import "./TabButton.css";

export default function TabButton({ children }) {
  function handleClick() {
    console.log("pulsando el boton alguno de ellos xd..");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
