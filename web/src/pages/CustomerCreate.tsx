import React, { FormEvent, useState } from 'react';
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
import { IoMdReturnLeft } from 'react-icons/io';

import Sidebar from '../components/Sidebar';
import api from '../services/api';

import '../styles/pages/form.css';

function Customer() {
  const { goBack } = useHistory();
  const history  = useHistory();

  const [name, setName] = useState('');
  const [date_birth, setDateBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [phone, setPhone] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('customers', {
      name,
      date_birth,
      cpf,
      rg,
      phone
    });

    alert('Cadastro realizado com sucesso!');

    history.push('/users');
  };

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
                <input id="name" maxLength={100} />
              </div>

              <div className="input-block">
                <label htmlFor="dt_nasc">Data de Nascimento</label>
                <input id="dt_nasc" type="date" />
              </div>

              <div className="input-block">
                <label htmlFor="cpf">CPF</label>
                <InputMask mask="999-999-999-99" id="cpf" />
              </div>

              <div className="input-block">
                <label htmlFor="rg">RG</label>
                <input id="rg" maxLength={20} />
              </div>

              <div className="input-block">
                <label htmlFor="celular">Celular</label>
                <InputMask mask="(99)99999-9999" id="celular" />
              </div>

              <button className="confirm-button" type="submit" form="form">Confirmar</button>
            </form>
          </div>
        </div>
      </main>      
    </div>
  );
}

export default Customer;