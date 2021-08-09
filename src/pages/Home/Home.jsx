import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="Home">
    <h1>Stylized percentage chart</h1>
    <p>
      Essa página tem como finalidade auxiliar na estilização do componente
      libary stylized-percentage-chart
    </p>
    <p>Na página Estilizar gráfico encontrar ferramentas que permitirá que estilize o grafico:</p>
    <ul>
      <li>Na guia Backgroud, estilizar o fundo do seu gráfico</li>
      <li>Na guia Inserir Dados, insira dados simulando o que ocorrerá na sua aplização</li>
      <li>Na guia Editar Barras, poderá alterar e excluir os dados e trocar a cor das barras</li>
      <li>Na guia Estilizar Barras, configure detalhes nos estilo das barras</li>
      <li>Na guia Legenda, poderá optar por usar legenda estilizada a seu gosto</li>
    </ul>
    <Link to="/settings">Inicar</Link>
  </div>
);

export default Home;
