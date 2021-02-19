import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MdEdit, MdDelete } from 'react-icons/md';

import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../styles/pages/users-list.css';

interface User {
  id: number;
  name: string;
  login: string;
  email: string;
  password: string;
}

function UsersList() {
  const history  = useHistory();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('users').then(response => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  async function handleDelete(id: number) {
    if(window.confirm("Deseja realmente excluir o cadastro?")){
      await api.delete(`users/${id}`);
    }

    history.push('/users');
  };

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
              {users.map(user => {
                return(
                  <tr>
                    <td className="column-icons">
                      <Link to={`/user/${user.id}`}>
                        <i><MdEdit size={25} /></i>
                      </Link>
                    </td>
                    <td className="column-icons">
                      <Link to='' onClick={() => handleDelete(user.id)}>
                        <i><MdDelete size={25} /></i>
                      </Link>
                    </td>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.login}</td>
                    <td>{user.email}</td>
                  </tr>
                )                
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Link to="/user/create" className="create-user">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link>
    </div>    
  );
}

export default UsersList;