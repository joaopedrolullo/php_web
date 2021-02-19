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

interface AddressParams {
  id: string;
}

function Address() {
  const { goBack } = useHistory();
  
  const params = useParams<AddressParams>();
  const [address, setAddress] = useState<Address>();

  //Campos do form
  const [formAddress, setFormAddress] = useState('');
  const [formComplement, setFormComplement] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formState, setFormState] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [formZipCode, setFormZipCode] = useState('');

  useEffect(() => {
    api.get(`addresses/${params.id}`).then(response => {
      setAddress(response.data);
    });
  }, [params.id]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log({
      formAddress,
      formComplement,
      formCity,
      formState,
      formCountry,
      formZipCode
    });
  };

  if (!address) {
    return <p>Carregando...</p>;
  }

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
                <input id="endereco" maxLength={80} value={address.address} onChange={event => setFormAddress(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="complemento">Complemento</label>
                <input id="complemento" maxLength={80} value={address.complement} onChange={event => setFormComplement(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" maxLength={80} value={address.city} onChange={event => setFormCity(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="estado">Estado</label>
                <input id="estado" maxLength={80} value={address.state} onChange={event => setFormState(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="pais">País</label>
                <input id="pais" maxLength={60} value={address.country} onChange={event => setFormCountry(event.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="cep">CEP</label>
                <InputMask mask="99999-999" id="cep" value={address.zip_code} onChange={event => setFormZipCode(event.target.value)} />
              </div>

              <button className="confirm-button" type="submit" form="form">Confirmar</button>
            </form>
          </div>
        </div>
      </main>      
    </div>
  );
}

export default Address;