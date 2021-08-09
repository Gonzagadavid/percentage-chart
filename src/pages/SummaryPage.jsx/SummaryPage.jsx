import React from 'react';
import { summaryData, summaryStyle } from '../../data/summaryInfo';
import './SummaryPage.css';

const SummaryPage = () => (
  <div className="Summary">
    <h2>Sumário</h2>
    <h3>Dados dinâmicos</h3>
    {summaryData.map(({ name, description }) => (
      <div key={name} className="item">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    ))}
    <h3>Dados de estilo</h3>
    {summaryStyle.map(({ name, description }) => (
      <div key={name} className="item">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    ))}
  </div>
);

export default SummaryPage;
