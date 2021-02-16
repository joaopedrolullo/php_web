import React from 'react';
import { Link } from 'react-router-dom';
import { RiArchiveFill, RiMapPin2Fill, RiShutDownLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';

import '../styles/components/sidebar.css';

export default function Sidebar() {
  return(
    <aside className="app-sidebar">
        <header>
          <ul>
            <li>
              <Link to="/app">
                <i><RiArchiveFill/></i>
                Clientes
              </Link>              
            </li>
            
            <li>
              <Link to="/addresses">
                <i><RiMapPin2Fill/></i>
                Endereços
              </Link>
            </li>

            <li>
              <Link to="/users">
                <i><FaUsers/></i>
                Usuários
              </Link>
            </li>

            <li>
              <Link to="/">
                <i><RiShutDownLine/></i>
                Sair
              </Link>
            </li>
          </ul>
        </header>
      </aside>
  );
}