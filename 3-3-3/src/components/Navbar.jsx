import React from 'react';



const Navbar = () => (
    <header>
        <div className="Navbar">
            <ul>
                <li className="color"><a href="#presetation">Apresentação</a></li>
                <li className="color"><a href="#Skills">Habilidades</a></li>
                <li className="color"><a href="#projetos">Projetos</a></li>
            </ul>
            <ul>
                <li><a href="https://github.com/viniciosevan" target="_blank" rel="noopener noreferrer"><img src="/src/imgs/cat4.gif" alt="aaa" width={38} /></a></li>
                <li><a href="https://www.linkedin.com/in/vinicios-evangelista-00a375304/" target="_blank" rel="noopener noreferrer"><img src="src/imgs/linke.png" alt="LinkedIn" /></a></li>
                
            </ul>
        </div>
    </header>
);

export default Navbar;