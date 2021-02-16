import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

import '../styles/components/grid.css';

export default function GridAddress() {
  return(
    <tr>
      <td className="column-icons">
        <Link to="/">
          <i><MdEdit size={25} /></i>
        </Link>
      </td>
      <td className="column-icons">
        <Link to="/">
          <i><MdDelete size={25} /></i>
        </Link>
      </td>
      <td>1</td>
      <td>Rua Elpidio Benedetti, 36</td>
      <td></td>
      <td>Araçatuba</td>
      <td>São Paulo</td>
      <td>Brasil</td>
      <td>16012-260</td>
    </tr>
  );
}