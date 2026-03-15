import Footers from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={Footers.footer}>
      <p>M.S.KEERTHIKA</p>
      <p>Frontend Developer</p>

      <div className={Footers.icons}>
       

        <a href="https://www.linkedin.com/in/keerthika-m-s-6a009525a/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="https://github.com/keerthika64" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;