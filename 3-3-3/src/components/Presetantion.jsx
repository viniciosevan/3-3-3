import React from 'react';
import './Presetation.css'

function Presentation() {
  return (
    <div className="Presentation" id="Presentation">
      <h4><strong>Bem-vindo ao meu Portfólio</strong></h4><br></br>
      <h1>Olá, Meu nome é Vinícios</h1>
      <p>Meu nome é Vinícios e sou desenvolvedor Front-end formado pela Escola DNC.<br />
        Tenho experiência sólida em HTML, CSS, JavaScript e frameworks como React.js<br /> e Vue.js.
        Tenho como objetivo me tornar desenvolvedor Full Stack, é por isso estou<br /> sempre buscando novos desafios
        que me ajudem no meu crescimento.<br /><br />
        <strong>Vamos juntos transformar suas ideias em realidade digital!</strong>
      </p>
      <a href="https://www.linkedin.com/in/vinicios-evangelista-00a375304/" target="_blank" rel="noopener noreferrer">
        <button id="btna">Conecte-se comigo!!</button>
      </a>
    </div>
  );
}

export default Presentation;