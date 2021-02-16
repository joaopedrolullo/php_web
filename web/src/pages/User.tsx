import React from 'react';
import { useHistory } from "react-router-dom";

import { IoMdReturnLeft } from 'react-icons/io';
import Sidebar from '../components/Sidebar';

import '../styles/pages/form.css';

function User() {
  const { goBack } = useHistory();

  return(
    <div id="page">
      <Sidebar />

      <main>
        <div id="page-form" className="container">
          <h1>Usuário</h1>
          <hr/>

          <button type="button" onClick={goBack} className="go-back">
            <IoMdReturnLeft size={24} color="#FFF" />
          </button>

          <div id="form-panel">
            <form action="/" method="" className="form">
              <div className="input-block">
                <label htmlFor="nome">Nome</label>
                <input id="nome" maxLength={100} />
              </div>

              <div className="input-block">
                <label htmlFor="login">Login</label>
                <input id="login" type="text" style={{ textTransform: 'uppercase' }} maxLength={40} />
              </div>

              <div className="input-block">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" maxLength={80} />
              </div>

              <div className="input-block">
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" maxLength={30} />
              </div>
              
              <button className="confirm-button" type="submit" form="form">Confirmar</button>
            </form>
          </div>
        </div>
      </main>      
    </div>
  );
}

export default User;