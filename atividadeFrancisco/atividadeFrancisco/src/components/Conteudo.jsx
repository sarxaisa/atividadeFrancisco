import React from "react";
import Paz from "../img/Paz.jpg";
import Palestras from "../img/Palestras.jpg"
import Aprendizes from "../img/Aprendizes.jpg"
import Espiritual from "../img/Espiritual.jpg"
import Gestantes from "../img/Gestantes.jpg"

function Conteudo() {
  const conteudos = [
    {
      titulo: "Gestantes e Crianças",
      descricao: "Terça-feira às 14:45h",
      imagem: Gestantes
    },
    {
      titulo: "Assistência Espiritual",
      descricao: "Segunda-feira e Terça-feira ás 19:45h",
      paragrafo: "Quinta-feira ás 14:45h",
      imagem: Espiritual
    },
    {
      titulo: "Escola de Aprendizes",
      descricao: "Quarta-feira às 14:00h e 19:30h",
      imagem: Aprendizes
    },
    {
      titulo: "Palestras públicas",
      descricao: "Segunda-feira e Terça-feira ás 19:45h",
      paragrafo: "Quinta-feira ás 14:45h",
      imagem: Palestras
    },
    {
      titulo: "Juventude",
      descricao: "Quinta-feira às 19:45h",
      paragrafo: "Ética e Moral Cristã",
      imagem: Paz
    }
  ];

  return (
    <div>
      {conteudos.map((item, index) => (
        <div key={index} className="conteudo-item">
          <h3>{item.titulo}</h3>
        <button className="ver-mais">Ver mais...</button>
          <p>{item.descricao}</p>
          <p>{item.paragrafo}</p>
           <img src={item.imagem} alt={item.titulo} className="imagem-esquerda" />
        </div>
      ))}
      </div>
  );
}

export default Conteudo;