import React from 'react';
import DataPage from '../DataPage/DataPage';
import GraphicPage from '../GraphicPage/GraphicPage';
import './SetPage.css';

function SetPage() {
  return (
    <div className="SetPage">
      <DataPage />
      <GraphicPage />
    </div>
  );
}

export default SetPage;
