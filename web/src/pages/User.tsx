import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { IoMdReturnLeft } from 'react-icons/io';

import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../styles/pages/form.css';

interface UserParams {
  id: string;
}

function User() {
  const { goBack } = useHistory();
  const history  = useHistory();

  const params = useParams<UserParams>();
  
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    api.get(`users/${params.id}`).then(response => {
      setName(response.data.name);
      setLogin(response.data.login);
      setEmail(response.data.email);
      setPassword(response.data.password);
    });
  }, [params.id]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
      
    await api.put(`users/${params.id}`, {
      name,
      login,
      email,
      password
    });

    alert('Alteração realizada com sucesso!');

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
                <input id="nome" maxLength={100} defaultValue={name} onChange={event => setName(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="login">Login</label>
                <input id="login" type="text" style={{ textTransform: 'uppercase' }} maxLength={40} defaultValue={login} onChange={event => setLogin(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" maxLength={80} defaultValue={email} onChange={event => setEmail(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" maxLength={30} defaultValue={password} onChange={event => setPassword(event.target.value)} />
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