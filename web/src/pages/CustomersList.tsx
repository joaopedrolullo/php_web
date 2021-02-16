import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import GridCustomers from '../components/GridCustomers';

import '../styles/pages/customers-list.css';

function CustomersList() {
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
              <GridCustomers />
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