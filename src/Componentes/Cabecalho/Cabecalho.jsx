import React from 'react';
import "./Cabecalho.css";
import NomelogoSemFundo from '../../Assets/Imagens/NomelogoSemFundo.png';

function Cabecalho() {
  return (
    <div className="Cabecalho">
            <img src={NomelogoSemFundo} alt="" />

      <div className="Cabecalho__acessos">
        <nav className="Controle_Usuario">
          <button className="cadastro">
            <a href="FazerCadastro.html">Cadastrar-se</a>
          </button>

          <button className="login">
            <a href="FazerLogin.html">Entrar</a>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Cabecalho;
