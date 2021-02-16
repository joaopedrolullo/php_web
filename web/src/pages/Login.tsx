import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUserCircle, FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import axios from 'axios';

import '../styles/global.css';
import '../styles/pages/login.css';


function Login() {
  const history = useHistory();

  const[login, setLogin] = useState('');
  const[password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('login', login);
    data.append('password', password);

    axios.post('http://localhost:3000/backend/index.php', data)
    .then(res => console.log(res.data));
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
              <input type="text" placeholder="Login" name="login" maxLength={40} value={login} onChange={event => setLogin(event.target.value)} />
            </div>

            <div className="WithIcon">
              <i><RiLockPasswordFill/></i>
              <input type="password" placeholder="Senha" name="passwaord" maxLength={30} value={password} onChange={event => setPassword(event.target.value)} />
            </div>

            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;