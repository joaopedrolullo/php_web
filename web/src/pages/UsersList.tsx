import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import GridUsers from '../components/GridUsers';

import '../styles/pages/users-list.css';

function UsersList() {
  return(
    <div id="page-users">
      <Sidebar />
      
      <div id="page-users-list" className="container">
        <h1>Manutenção do Usuário</h1>
        <hr/>

        <div id="users-grid">
          <table>
            <thead>
              <tr>
                <th className="column-icons-header"></th>
                <th className="column-icons-header"></th>
                <th>Código</th>
                <th>Nome</th>
                <th>Login</th>
                <th>E-mail</th>               
              </tr>
            </thead>
            <tbody>
              <GridUsers />
            </tbody>
          </table>
        </div>
      </div>

      <Link to="/user" className="create-user">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link>
    </div>    
  );
}

export default UsersList;