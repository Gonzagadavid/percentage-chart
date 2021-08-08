import React from 'react';
import { Route } from 'react-router-dom';
import EditBarContainer from '../components/EditBarContainer';
import InputBackground from '../components/InputBackground';
import InputBar from '../components/InputBar';
import InputData from '../components/InputData';
import Legend from '../components/Lengend';
import NavSet from '../components/NavSet/NavSet';

const DataPage = () => (
  <div>
    <NavSet />
    <Route path="/settings/background" component={InputBackground} />
    <Route path="/settings/insert-data" component={InputData} />
    <Route path="/settings/edit-bar" component={EditBarContainer} />
    <Route path="/settings/style-bar" component={InputBar} />
    <Route path="/settings/legend" component={Legend} />
  </div>
);

export default DataPage;
