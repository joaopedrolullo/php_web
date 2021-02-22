import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MdEdit, MdDelete } from 'react-icons/md';

import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../styles/pages/address-list.css';
import '../styles/components/grid.css';

interface Address {
  id: number;
  address: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
}

function AddressList() {
  const history  = useHistory();

  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    api.get('addresses').then(response => {
      setAddresses(response.data);
    });
  }, []);

  async function handleDelete(id: number) {
    if(window.confirm("Deseja realmente excluir o cadastro?")){
      await api.delete(`addresses/${id}`);
    }

    history.push('/addresses');
  };

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
              {addresses.map(address => {
                return(
                  <tr>
                    <td className="column-icons" key={address.id}>
                      <Link to={`/address/${address.id}`}>
                        <i><MdEdit size={25} /></i>
                      </Link>
                    </td>
                    <td className="column-icons">
                      <Link to='' onClick={() => handleDelete(address.id)}>
                        <i><MdDelete size={25} /></i>
                      </Link>
                    </td>
                    <td>{address.id}</td>
                    <td>{address.address}</td>
                    <td>{address.complement}</td>
                    <td>{address.city}</td>
                    <td>{address.state}</td>
                    <td>{address.country}</td>
                    <td>{address.zip_code}</td>
                  </tr>
                  )                
                })}
            </tbody>
          </table>
        </div>
      </div>  

      <Link to="/address/create" className="create-address">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link>        
    </div>    
  );
}

export default AddressList;