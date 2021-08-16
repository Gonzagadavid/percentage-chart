import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import './Editar.css';

const EditBar = ({
  text, color, changeColor, qty, changeQty, remove,
}) => (
  <div className="EditBar">
    <span>{text}</span>
    <input type="color" value={color} onChange={changeColor} />
    <input type="number" value={qty} onChange={changeQty} />
    <button type="button" onClick={remove}><BsFillTrashFill /></button>
  </div>
);

export default EditBar;
