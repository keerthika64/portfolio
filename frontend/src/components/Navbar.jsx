import { useState } from "react";
import Navbars from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={Navbars.details}>
      <div className={Navbars.whole}>

        <h1 className={Navbars.head}>MS</h1>

        <div className={Navbars.nav}>

          <div className={Navbars.checking} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <ul className={`${Navbars.menu} ${menuOpen ? Navbars.active : ""}`}>

            <li><a href="#home" onClick={closeMenu}>Home</a></li>

            <li><a href="#about" onClick={closeMenu}>About</a></li>

            <li><a href="#education" onClick={closeMenu}>Education</a></li>

            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>

            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>

            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>

            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
