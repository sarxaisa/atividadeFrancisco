import React, { useState } from "react";
import logo from "../img/logo.png"



function Menu() {
    const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
  return (
    <nav className="menu-container">
      {<img src={logo} alt="Logo" className="menu-logo" /> }

      <button
        className="menu-toggle"
        aria-label="Abrir menu"
        onClick={toggleMenu}
      >
        ☰
      </button>
 
      <ul className={`menu-nav ${menuAberto ? "open" : ""}`}>
        <li><a href="#">Início</a></li>
        <li><a href="#">Atividades</a></li>
       <li><a href="#">Luz e Amor</a></li>
        <li><a href="#">Quem somos</a></li>
        <li><a href="#">Como doar</a></li>
      </ul>
    </nav>
  );
}

export default Menu;