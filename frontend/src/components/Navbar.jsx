
import Navbars from "./Navbar.module.css";
import Button from "./Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={Navbars.details}>
      <div className={Navbars.whole}>
        <div>
          <h1 className={Navbars.head}>MS</h1>
        </div>
        <div>
          <input type="checkbox" id="menu" className={Navbars.check} />

          <label htmlFor="menu" className={Navbars.checking}>
            <FontAwesomeIcon  icon={faBars} className={Navbars.font} />
          </label>

          <ul className={Navbars.menu}>
        
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#education">Education</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
