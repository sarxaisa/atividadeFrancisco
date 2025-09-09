import React from "react";
import Paz from "../img/Paz.jpg";
import Palestras from "../img/Palestras.jpg";
import Aprendizes from "../img/Aprendizes.jpg";
import Espiritual from "../img/Espiritual.jpg";
import Gestantes from "../img/Gestantes.jpg";


function Conteudo() {
  const conteudos = [
    {
      titulo: "Gestantes e Crianças",
      horario: "Terça-feira às 14:45h",
      texto: "O atendimento a gestantes e crianças até 8 anos objetiva apoiar as futuras mamães a manterem o equilíbrio emocional, adequado a esta fase tão importante de suas vidas, o equilíbrio espiritual e físico de seus filhos.",
      imagem: Gestantes
    },
    {
      titulo: "Assistência Espiritual",
      horario: "Segunda-feira e Terça-feira às 19:45h | Quinta-feira às 14:45h",
      texto: "Por intermédio de entrevista pessoal e privada, procuramos, junto com o assistido, identificar suas inquietudes, necessidades e dificuldades, e propomos uma intervenção conjunta, onde o assistido frequenta nossas palestras públicas e participa do serviço de assistência espiritual objetivando reencontrar o equilíbrio individual.",
      imagem: Espiritual
    },
    {
      titulo: "Escola de Aprendizes",
      horario: "Quarta-feira às 14:00h e 19:30h",
      texto: "A Escola de Aprendizes do Evangelho propicia o estudo da Doutrina Espírita em suas três dimensões; religiosa, filosófica e científica. O estudo do Evangelho de Jesus Cristo à luz da razão possibilita o desenvolvimento individual e melhora nosso relacionamento com a sociedade.",
      imagem: Aprendizes
    },
    {
      titulo: "Palestras Públicas",
      horario: "Segunda-feira e Terça-feira às 19:45h | Quinta-feira às 14:45h",
      texto: "Em nossas palestras públicas apresentamos temas evangélicos destinados a promover a autoreflexão dos participantes em temas de interesse individual, como saúde, sentimentos, relacionamentos e o Evangelho de Jesus. Esteja convidado a participar.",
      imagem: Palestras
    },
    {
      titulo: "Juventude",
      horario: "Quinta-feira às 19:45h",
      texto: "Por meio de atividades lúdicas, palestras, artesanato e passes, a ética e moral cristã é trabalhada com os jovens entre oito e dezoito anos, transmitindo os ensinamentos de nosso mestre Jesus com leveza e alegria.",
      imagem: Paz
    }
  ];

  return (
    <div className="conteudo-container">
      {conteudos.map((item, index) => (
        <div key={index} className="conteudo-item">
          <img src={item.imagem} alt={item.titulo} className="imagem-esquerda" />
          <div className="conteudo-texto">
            <h3>{item.titulo}</h3>
            <p className="horario">{item.horario}</p>
            <p className="descricao">{item.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Conteudo;