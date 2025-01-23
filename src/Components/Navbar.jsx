import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="menu-button" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={menuOpen ? "nav-menu open" : "nav-menu"} >
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/findme" onClick={toggleMenu}>Findme</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
