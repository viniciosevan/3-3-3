import React from 'react';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <p>
            Meu contato: <a href="https://wa.me/5534991464823?text=Ol%C3%A1,%20vi%20seu%20portfolio" target="_blank" rel="noopener noreferrer"><br></br>
              (34) 991464826
            </a>
          </p>
        </li>
        <li>
          <p>Email: viniciosevan@gmail.com</p>
        </li>
      </ul>

      

      <div className="social">
        <ul>
          <li>
            <a href="https://github.com/viniciosevan" target="_blank" rel="noopener noreferrer">
              <img src="src/imgs/cat4.gif" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vinicios-evangelista-00a375304/" target="_blank" rel="noopener noreferrer">
              <img src="src/imgs/linke.png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
