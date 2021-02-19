import React, { FormEvent, useState } from 'react';
import { useHistory } from "react-router-dom";

import { IoMdReturnLeft } from 'react-icons/io';
import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../styles/pages/form.css';

function User() {
  const { goBack } = useHistory();
  const history  = useHistory();

  //Campos do form
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
      
    await api.post('users', {
      name,
      login,
      email,
      password
    });

    alert('Cadastro realizado com sucesso!');

    history.push('/users');
  };

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
            <form onSubmit={handleSubmit} className="form">
              <div className="input-block">
                <label htmlFor="nome">Nome</label>
                <input id="nome" maxLength={100} value={name} onChange={event => setName(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="login">Login</label>
                <input id="login" type="text" style={{ textTransform: 'uppercase' }} maxLength={40} value={login} onChange={event => setLogin(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" maxLength={80} value={email} onChange={event => setEmail(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" maxLength={30} value={password} onChange={event => setPassword(event.target.value)} />
              </div>
              
              <button className="confirm-button" type="submit" >Confirmar</button>
            </form>
          </div>
        </div>
      </main>      
    </div>
  );
}

export default User;