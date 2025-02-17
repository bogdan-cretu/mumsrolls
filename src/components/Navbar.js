import { useState } from "react";
import logo from "../images/icons/white-logo.svg";
import "./Navbar.css"; 
import { scrollToSection } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="right-menu">
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><a href="/about">Despre noi</a></li>
                <li><a href="/about">Meniu</a></li>
                <li><a href="/about">Procesul de preparare</a></li>
                <li><a href="/about">Recenzii</a></li>
                <li><a href="/about">Evenimente si catering</a></li>
            </ul>
            <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? "line line1 open" : "line line1"}></div>
                <div className={isOpen ? "line line2 open" : "line line2"}></div>
                <div className={isOpen ? "line line3 open" : "line line3"}></div>
            </div>
            <button onClick={() => scrollToSection("contact")} className="btn-standard secondary">Contact</button>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
