import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Hero.png';
import themeIcon from '../../assets/sun.svg';

function Hero() {
  return ( 
  <section id="hero">
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} 
            src={heroImg} 
            alt="Profile Picture of Abhay Verma" 
        />
        <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="Color mode icon" 
        />
    </div>
    <div className={styles.info} >
        <h1>
            Abhay
            <br />
            Verma
        </h1> 
        <h2>Software Developer</h2>
        <span>
            <a href="https:"></a>
        </span>

    </div>
  </section>
  );
}

export default Hero;