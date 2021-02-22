import React, { FormEvent, useState } from 'react';
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";

import { IoMdReturnLeft } from 'react-icons/io';

import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../styles/pages/form.css';

function Address() {
  const { goBack } = useHistory();
  const history  = useHistory();

  const [address, setAddress] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zip_code, setZipCode] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('addresses', {
      address,
      complement,
      city,
      state,
      country,
      zip_code
    });

    alert('Cadastro realizado com sucesso!');

    history.push('/addresses');
  };

  return(
    <div id="page">
      <Sidebar />

      <main>
        <div id="page-form" className="container">
          <h1>Endereço</h1>
          <hr/>

          <button type="button" onClick={goBack} className="go-back">
            <IoMdReturnLeft size={24} color="#FFF" />
          </button>

          <div id="form-panel">
            <form onSubmit={handleSubmit} className="form">
              <div className="input-block">
                <label htmlFor="endereco">Endereço</label>
                <input id="endereco" maxLength={80} value={address} onChange={event => setAddress(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="complemento">Complemento</label>
                <input id="complemento" maxLength={80} value={complement} onChange={event => setComplement(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" maxLength={80} value={city} onChange={event => setCity(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="estado">Estado</label>
                <input id="estado" maxLength={80} value={state} onChange={event => setState(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="pais">País</label>
                <input id="pais" maxLength={60} value={country} onChange={event => setCountry(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="cep">CEP</label>
                <InputMask mask="99999-999" id="cep" value={zip_code} onChange={event => setZipCode(event.target.value)} />
              </div>

              <button className="confirm-button" type="submit" >Confirmar</button>
            </form>
          </div>
        </div>
      </main>      
    </div>
  );
}

export default Address;