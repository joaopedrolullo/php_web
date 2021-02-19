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
    api.get('customers').then(response => {
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
              {customers.map(customer => {
                return(
                <tr>
                  <td className="column-icons">
                    <Link to={`/customer/${customer.id}`}>
                      <i><MdEdit size={25} /></i>
                    </Link>
                  </td>
                  <td className="column-icons">
                    <Link to='' onClick={() => handleDelete(customer.id)}>
                      <i><MdDelete size={25} /></i>
                    </Link>
                  </td>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.date_birth}</td>
                  <td>{customer.cpf}</td>
                  <td>{customer.rg}</td>
                  <td>{customer.phone}</td>
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