import React from 'react';
import { summaryData, summaryStyle } from '../../data/summaryInfo';

const SummaryPage = () => (
  <div>
    <h2>Sumário</h2>
    <h3>Dados dinâmicos</h3>
    {summaryData.map(({ name, description }) => (
      <div key={name}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    ))}
    <h3>Dados de estilo</h3>
    {summaryStyle.map(({ name, description }) => (
      <div key={name}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    ))}
  </div>
);

export default SummaryPage;
