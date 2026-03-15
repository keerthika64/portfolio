
import Heros from "./Hero.module.css";
import Button from "./Button";
import picture from "../assets/image-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import moni from "../assets/keerthika.Resume.pdf"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className={Heros.hero} id="home">
      <div className={Heros.about} data-aos="fade-right">
        <p>Hello, I'm</p>
        <h1>Keerthika</h1>
        <h2>Frontend Developer</h2>
        <p>
          Frontend Developer skilled in building responsive and user-focused
          web applications using HTML, CSS, JavaScript, and React.js.
        </p>

        <div className={Heros.abouts}>
          <a href={moni}>
          <Button text={"Resume"} radius={"10px"}  width={'110px'} links={moni}/>
          </a>
          <a href="https://www.linkedin.com/in/keerthika-m-s-6a009525a/">
          <FontAwesomeIcon icon={faLinkedin} className={Heros.icons} />
          </a>
          <a href="https://github.com/keerthika64">
          <FontAwesomeIcon icon={faGithub} className={Heros.iconss} />
          </a>
        </div>
      </div>

      <div className={Heros.face}>
        <div className={Heros.focus} data-aos="fade-left">
          <img className={Heros.don} src={picture} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
