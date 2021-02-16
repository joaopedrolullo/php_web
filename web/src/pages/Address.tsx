import React from 'react';
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";

import { IoMdReturnLeft } from 'react-icons/io';

import Sidebar from '../components/Sidebar';

import '../styles/pages/form.css';

function Address() {
  const { goBack } = useHistory();

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
            <form action="/" method="" className="form">
              <div className="input-block">
                <label htmlFor="endereco">Endereço</label>
                <input id="endereco" maxLength={80} />
              </div>

              <div className="input-block">
                <label htmlFor="complemento">Complemento</label>
                <input id="complemento" maxLength={80} />
              </div>

              <div className="input-block">
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" maxLength={80} />
              </div>

              <div className="input-block">
                <label htmlFor="estado">Estado</label>
                <input id="estado" maxLength={80} />
              </div>

              <div className="input-block">
                <label htmlFor="pais">País</label>
                <input id="pais" maxLength={60} />
              </div>

              <div className="input-block">
                <label htmlFor="cep">CEP</label>
                <InputMask mask="99999-999" id="cep"/>
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