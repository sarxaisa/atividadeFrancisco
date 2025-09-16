import React from "react";
import Paz from "../img/Paz.jpg";
import Palestras from "../img/Palestras.jpg"
import Aprendizes from "../img/Aprendizes.jpg"
import Espiritual from "../img/Espiritual.jpg"
import Gestantes from "../img/Gestantes.jpg"
import Juventude from "../img/Juventude.jpg"
import Eventos from "../img/Eventos.jpg"

function Conteudo() {
  const conteudos = [
    {
      titulo: "Gestantes e Crianças",
      descricao: "Terça-feira às 14:45h",
      imagem: Gestantes,
      texto:
        "O atendimento a gestantes e crianças até 8 anos objetiva apoiar as futuras mamães a manterem o equilíbrio emocional, adequado a esta fase tão importante de suas vidas, o equilíbrio espiritual e físico de seus filhos.",
    },
    {
      titulo: "Assistência Espiritual",
      descricao: "Segunda-feira e Terça-feira ás 19:45h",
      paragrafo: "Quinta-feira ás 14:45h",
      imagem: Espiritual,
      texto:
        "Por intermédio de entrevista pessoal e privada, procuramos, junto com o assistido, identificar suas inquietudes, necessidades e dificuldades, e propomos uma intervenção conjunta, onde o assistido frequenta nossas palestras públicas e participa do serviço de assistência espiritual objetivando reencontrar o equilíbrio individual.",
    },
    {
      titulo: "Escola de Aprendizes",
      descricao: "Quarta-feira às 14:00h e 19:30h",
      imagem: Aprendizes,
      texto:
        "A Escola de Aprendizes do Evangelho propicia o estudo da Doutrina Espírita em suas três dimensões; religiosa, filosófica e científica. O estudo do Evangelho que nos foi legado por Jesus Cristo e seu entendimento à luz da razão possibilita o trabalho de desenvolvimento individual propiciando a melhora em nosso relacionamento com a sociedade. A Filosofia nos ajuda no trabalho de autoconhecimento nos incentivando o processo de evolução continua, enquanto a Científica permite que desenvolvamos a Fé raciocinada e baseada em princípios universais",
    },
    {
      titulo: "Palestras públicas",
      descricao: "Segunda-feira e Terça-feira ás 19:45h",
      paragrafo: "Quinta-feira ás 14:45h",
      imagem: Palestras,
      texto:
        "Em nossas palestras públicas apresentamos temas evangélicos destinados a promover a autoreflexão dos participantes em temas de interesse individual. Saúde, sentimentos, relacionamento, emoções e Evangelho de Jesus são temas que promovem reflexão do indivíduo quanto ao seu relacionamento com a família e a comunidade. Esteja convidado a participar de nossas palestras nos dias programados.",
    },
    {
      titulo: "Juventude",
      descricao: "Quinta-feira às 19:45h",
      paragrafo: "Ética e Moral Cristã",
      imagem: Juventude,
      texto:
        "Por meio de atividades lúdicas, palestras, artesanato e passes, a ética e moral cristã é trabalhada com os jovens entre oito e dezoito anos, transmitindo os ensinamentos de nosso mestre Jesus com leveza e alegria.",
    },
    {
      titulo: "Eventos",
      imagem: Eventos,
      texto: 
        "Nossos eventos periódicos objetivam o congraçamento entre os trabalhadores e assistidos da casa, além da arrecadação de fundos para manutenção de nossas atividades. Realizamos anualmente o Bazar de Dias das Mães e o Bazar de Natal e, quinzenalmente, o Bazar da Pechincha com artigos usados, mas em boas condições, que são vendidos a preço simbólico. Periodicamente nos encontramos para nossos Almoços ou Chá da Tarde, cujas datas são divulgadas em nossas mídias sociais, cujo convite é extensivo a todos os frequentadores da casa.",
    },
  ];

  return (
    <div className="atividades">
      <h1>Atividades</h1>
      <div className="card-grid">
        {conteudos.map((item, index) => (
          <div key={index} className="conteudo-item">
            <img
              src={item.imagem}
              alt={item.titulo}
              className="imagem-esquerda"
            />
            <h3>{item.titulo}</h3>
            {item.descricao && <p>{item.descricao}</p>}
            {item.paragrafo && <p>{item.paragrafo}</p>}
            <p className="texto">{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Conteudo;