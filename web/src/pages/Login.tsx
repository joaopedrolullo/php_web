import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCircle, FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

import api from '../services/api';

import '../styles/global.css';
import '../styles/pages/login.css';


function Login() {
  const history = useHistory();

  const[login, setLogin] = useState('');
  const[password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try{     
      await api.post('login', {
        login,
        password
      });
      
      history.push('/users');
    }catch(error){
      alert('Usuário ou senha inválidos!');
    }   
  }

  return (
    <div id="login">
      <div className="wrapper">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="imgLogin">
              <FaUserCircle size={70}/>
            </div>            
            
            <div className="WithIcon">
              <i><FaUserAlt/></i>
              <input type="text" placeholder="Login" name="login" style={{ textTransform: 'uppercase' }} maxLength={40} value={login} onChange={event => setLogin(event.target.value)} />
            </div>

            <div className="WithIcon">
              <i><RiLockPasswordFill/></i>
              <input type="password" placeholder="Senha" name="passwaord" maxLength={30} value={password} onChange={event => setPassword(event.target.value)} />
            </div>

            {/* <button className="confirm-button" type="submit" >Entrar</button> */}

            <Link to="/app">
              <button>Entrar</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;