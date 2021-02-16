import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import GridAddress from '../components/GridAddress';

import '../styles/pages/address-list.css';

function AddressList() {
  return(
    <div id="page-address">
      <Sidebar />
      
      <div id="page-address-list" className="container">
        <h1>Manutenção do Endereço</h1>
        <hr/>

        <div id="address-grid">
          <table>
            <thead>
              <tr>
                <th className="column-icons-header"></th>
                <th className="column-icons-header"></th>
                <th>Código</th>
                <th>Endereço</th>
                <th>Complemento</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>País</th>
                <th>CEP</th>               
              </tr>
            </thead>
            <tbody>
              <GridAddress />
            </tbody>
          </table>
        </div>
      </div>  

      <Link to="/address" className="create-address">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link>        
    </div>    
  );
}

export default AddressList;