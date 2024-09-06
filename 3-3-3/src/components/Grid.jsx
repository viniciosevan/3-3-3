import React from 'react';
import './Grid.css'

function Grid() {
  return (
    <section class="projetos">
        <h1>Projetos</h1>
        <div class="container">
            <div class="projeto">
                <img src="src/imgs/captura.png" alt="Projeto 1"/>
                <h2>PROJETO 1</h2>
                <p>O Buscapé funciona como um assistente de compras, para que os consumidores pesquisem produtos, preços, promoções e lojas.</p>
                <a href="#" class="btn">Clique aqui</a>
            </div>

            <div class="projeto">
                <img src="src/imgs/captura.png" alt="Projeto 2"/>
                <h2>PROJETO 2</h2>
                <p>O Buscapé funciona como um assistente de compras, para que os consumidores pesquisem produtos, preços, promoções e lojas.</p>
                <a href="#" class="btn">Clique aqui</a>
            </div>

            <div class="projeto">
                <img src="src/imgs/captura.png" alt="Projeto 3"/>
                <h2>PROJETO 3</h2>
                <p>O Buscapé funciona como um assistente de compras, para que os consumidores pesquisem produtos, preços, promoções e lojas.</p>
                <a href="#" class="btn">Clique aqui</a>
            </div>

            <div class="projeto">
                <img src="src/imgs/captura.png" alt="Projeto 4"/>
                <h2>PROJETO 4</h2>
                <p>O Buscapé funciona como um assistente de compras, para que os consumidores pesquisem produtos, preços, promoções e lojas.</p>
                <a href="#" class="btn">Clique aqui</a>
            </div>
        </div>
    </section>
  );
}

export default Grid;