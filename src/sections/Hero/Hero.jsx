import styles from "./HeroStyles.module.css"; // Fixed typo in import
import heroImage from "../../assets/heroImage.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        {" "}
        {/* Fixed className reference */}
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile Picture of Juan Zahid Angeles Sarabia Portfolio"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Juan <br />
          Zahid
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
