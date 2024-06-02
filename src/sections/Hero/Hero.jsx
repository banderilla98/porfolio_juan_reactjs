import styes from "./HeroStyles.module.css";
import heroImage from '../../assets/heroImage.png'

function Hero() {
  return <section id="hero">
    <div><img src={heroImage} alt="" /></div>
  </section>;
}

export default Hero;
