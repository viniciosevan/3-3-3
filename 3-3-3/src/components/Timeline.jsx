import React from 'react';

function Timeline() {
  return (
    <>
      <div id="about">
        <h2>Sobre mim</h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Aprendizado Básico</h3>
            <p>
              Aprendizado Básico: Html, CSS.<br />
              Primeiros Projetos: Criação de sites simples e landing pages.<br />
              Frameworks Iniciais.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Desenvolvimento JavaScript</h3>
            <p>
              JavaScript: Uso de ES6, promessas, e async/await.<br />
              Frameworks e Bibliotecas: React.js e Vue.js.<br />
              
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Aplicações Complexas</h3>
            <p>
              Desenvolvimento de aplicações complexas:SPA com React ou Vue.
              Integração com Back-end, e versonamento no git  .
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Design e UX</h3>
            <p>
              Design e UX: colaboração com designers, uso de ferramentas como Figma e Adobe XD,scrum.Alises precisas
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
