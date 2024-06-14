import styles from "./HeroStyles.module.css";
import heroImage from "../assets/heroImage.png";
import themeIcon from "../assets/sun.svg";
import twitterIcon from "../assets/twitter-light.svg";
import githubIcon from "../assets/github-light.svg";
import linkedinIcon from "../assets/linkedin-light.svg";
import CV from "../assets/cv.pdf"
import { useTheme } from "../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile Picture of Juan Zahid Angeles Sarabia Portfolio"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Juan <br />
          Zahid
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p>I enjoy developing modern React web applications for any type of business</p>
        <a href={CV} download><button className={styles.hover}>Resume</button></a>
      </div>
    </section>
  );
}

export default Hero;
