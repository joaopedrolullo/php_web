import React, { FormEvent, useEffect, useState } from 'react';
import InputMask from "react-input-mask";
import { useHistory, useParams } from "react-router-dom";

import { IoMdReturnLeft } from 'react-icons/io';
import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../styles/pages/form.css';

interface Address {
  id: number;
  address: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
}


interface CustomerParams {
  id: string;
}

function Customer() {
  const { goBack } = useHistory();
  const history  = useHistory();

  const params = useParams<CustomerParams>();

  const [name, setName] = useState('');
  const [date_birth, setDateBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    api.get(`customer/${params.id}`).then(response => {
      setName(response.data.name);
      setDateBirth(response.data.date_birth);
      setCpf(response.data.cpf);
      setRg(response.data.rg);
      setPhone(response.data.phone);
      setAddressItems(response.data.address);
    });
  }, [params.id]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
      
    await api.put(`customers/${params.id}`, {
      name,
      date_birth,
      cpf,
      rg,
      phone,
      addresses: addressItems
    });

    alert('Alteração realizada com sucesso!');

    history.push('/customers');
  };

  const [addressItems, setAddressItems] = useState([
    { address: ''}
  ]);

  function addNewAddressItem() {
    setAddressItems([
      ...addressItems,
      { address: ''}
    ])
  };

  function setAddressItemValue(position: number, field: string, value: string) {
    const updatedAddressItems = addressItems.map((addressItem, index) => {
        if (index === position) {
            return { ...addressItem, [field]: value }
        }

        return addressItem;
    });

    setAddressItems(updatedAddressItems);
  };

  const [addresses, setAddresses] = useState<Address[]>([]);

  return(
    <div id="page">
      <Sidebar />

      <main>
        <div id="page-form" className="container">
          <h1>Cliente</h1>
          <hr/>

          <button type="button" onClick={goBack} className="go-back">
            <IoMdReturnLeft size={24} color="#FFF" />
          </button>

          <div id="form-panel">
            <form onSubmit={handleSubmit} className="form">
              <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input id="name" maxLength={100} defaultValue={name} onChange={event => setName(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="dt_nasc">Data de Nascimento</label>
                <input id="dt_nasc" type="date" defaultValue={date_birth} onChange={event => setDateBirth(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="cpf">CPF</label>
                <InputMask mask="999.999.999-99" id="cpf" value={cpf} onChange={event => setCpf(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="rg">RG</label>
                <input id="rg" maxLength={20} defaultValue={rg} onChange={event => setRg(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="celular">Celular</label>
                <InputMask mask="(99)99999-9999" id="celular" value={phone} onChange={event => setPhone(event.target.value)} />
              </div>

              <div className="address">
                <fieldset>
                  <legend>
                    Endereço
                    <button type="button" onClick={addNewAddressItem}>
                      + Novo Endereço
                    </button>
                  </legend>                 
                  
                  {addressItems.map((addressItem, index) => {
                    return (
                      <div key={addressItem.address} className="schedule-item">
                        <select onChange={e => setAddressItemValue(index, 'addresses', e.target.value)}>
                          <option value="">Selecione uma opção</option>
                          
                          {addresses.map((address) => (
                            <option value={address.id} >{address.address}</option>
                          ))}
                        </select>
                      </div>
                    );
                  })}  
                </fieldset>                                 
              </div>

              <button className="confirm-button" type="submit" >Confirmar</button>
            </form>
          </div>
        </div>
      </main>      
    </div>
  );
}

export default Customer;