import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

import { IoMdReturnLeft } from 'react-icons/io';
import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../styles/pages/form.css';

interface User {
  id: number;
  name: string;
  login: string;
  email: string;
  password: string;
}

interface UserParams {
  id: string;
}

function User() {
  const { goBack } = useHistory();

  const params = useParams<UserParams>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    api.get(`users/${params.id}`).then(response => {
      setUser(response.data);
    });
  }, [params.id]);

  if (!user) {
    return <p>Carregando...</p>;
  }

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
                <input id="nome" maxLength={100} value={user.name} />
              </div>

              <div className="input-block">
                <label htmlFor="login">Login</label>
                <input id="login" type="text" style={{ textTransform: 'uppercase' }} maxLength={40} value={user.login} />
              </div>

              <div className="input-block">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" maxLength={80} value={user.email} />
              </div>

              <div className="input-block">
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" maxLength={30} value={user.password} />
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