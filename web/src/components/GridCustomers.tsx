import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

import '../styles/components/grid.css';

export default function GridCustomers() {
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
      <td>17/07/1996</td>
      <td>123456789</td>
      <td>987654321</td>
      <td>18984471887</td>
    </tr>
  );
}