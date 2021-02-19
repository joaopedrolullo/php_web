import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MdEdit, MdDelete } from 'react-icons/md';
import Sidebar from '../components/Sidebar';

import '../styles/pages/customers-list.css';
import api from '../services/api';

interface Customer {
  id: number;
  name: string;
  date_birth: string;
  cpf: string;
  rg: string;
  phone: string;
}

function CustomersList() {
  const history  = useHistory();

  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    api.get('users').then(response => {
      setCustomers(response.data);
    });
  }, []);

  async function handleDelete(id: number) {
    if(window.confirm("Deseja realmente excluir o cadastro?")){
      await api.delete(`customers/${id}`);
    }

    history.push('/customers');
  };

  return (
    <div id="page-customers">
      <Sidebar />
      
      <div id="page-customers-list" className="container">
        <h1>Manutenção do Cliente</h1>
        <hr/>

        <div id="customers-grid">
          <table>
            <thead>
              <tr>
                <th className="column-icons-header"></th>
                <th className="column-icons-header"></th>
                <th>Código</th>
                <th>Nome</th>
                <th>Data de Nascimento</th>
                <th>CPF</th>
                <th>RG</th>
                <th>Celular</th>                
              </tr>
            </thead>
            <tbody>
              {customers.map(user => {
                return(
                <tr>
                  <td className="column-icons">
                    <Link to="/">
                      <i><MdEdit size={25} /></i>
                    </Link>
                  </td>
                  <td className="column-icons">
                    <Link to="/">
                      <i><MdDelete size={25} /></i>
                    </Link>
                  </td>
                  <td>1</td>
                  <td>João Pedro</td>
                  <td>17/07/1996</td>
                  <td>123456789</td>
                  <td>987654321</td>
                  <td>18984471887</td>
                </tr>
                )                
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Link to="/customer" className="create-customer">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link> 
    </div>    
  );
}

export default CustomersList;