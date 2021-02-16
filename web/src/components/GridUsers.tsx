import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

import '../styles/components/grid.css';

export default function GridUsers() {
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
      <td>João Pedro</td>
      <td>ADMIN</td>
      <td>admin@admin.com</td>
    </tr>
  );
}