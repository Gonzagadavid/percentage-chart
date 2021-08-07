import React from 'react';
import EditBarContainer from '../components/EditBarContainer';
import InputBackground from '../components/InputBackground';
import InputBar from '../components/InputBar';
import InputData from '../components/InputData';
import Legend from '../components/Lengend';

const DataPage = () => (
  <div>
    <InputBackground />
    <InputData />
    <EditBarContainer />
    <InputBar />
    <Legend />
  </div>
);

export default DataPage;
