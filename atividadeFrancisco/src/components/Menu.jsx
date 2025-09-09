import React from "react";
import logo from "../img/logo.png"

function Menu() {
  return (
    <nav className="menu-container">
      {<img src={logo} alt="Logo" className="menu-logo" /> }

      <button className="menu-icon">
          <i class="fas fa-bars"></i>
  </button>
 
      <ul className="menu-nav">
       
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