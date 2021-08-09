import React from 'react';
import { Link } from 'react-router-dom';
import './NavSet.css';

const NavSet = () => (
  <nav className="NavSet">
    <ul>
      <li><Link to="/percentage-chart/settings/background">Estilo Background</Link></li>
      <li><Link to="/percentage-chart/settings/insert-data">Inserir Dados</Link></li>
      <li><Link to="/percentage-chart/settings/edit-bar">Editar Barras</Link></li>
      <li><Link to="/percentage-chart/settings/style-bar">Estilizar Barras</Link></li>
      <li><Link to="/percentage-chart/settings/legend">Legenda</Link></li>
    </ul>
    <Link to="/code"><button type="button">Concluir</button></Link>
  </nav>
);

export default NavSet;
