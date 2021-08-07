import React from 'react';

const EditBar = ({
  text, color, changeColor, qty, changeQty, remove,
}) => (
  <div>
    <span>{text}</span>
    <input type="color" value={color} onChange={changeColor} />
    <input type="number" value={qty} onChange={changeQty} />
    <button type="button" onClick={remove}>X</button>
  </div>
);

export default EditBar;
