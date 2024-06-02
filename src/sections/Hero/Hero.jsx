import styes from "./HeroStyles.module.css";
import heroImage from "../../assets/heroImage.png";
import themeIcon from "../../assets/sun.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className="styles.colorModeContainer">
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile Picture of Juan Zahid Angeles Sarabia Portfolio"
        />
        <img
          className={styles.ColorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>Juan <hr />Zahid</h1>
      </div>
    </section>
  );
}

export default Hero;
