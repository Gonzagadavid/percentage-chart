import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditBarContainer from '../../components/InputsContainer/EditBarContainer';
import InputBackground from '../../components/InputsContainer/InputBackground';
import InputBar from '../../components/InputsContainer/InputBar';
import InputData from '../../components/InputsContainer/InputData';
import Legend from '../../components/InputsContainer/Lengend';
import './DataPage.css';

const DataPage = () => (
  <div className="DataPage">
    <Switch>
      <Route exact path="/percentage-chart/background" component={InputBackground} />
      <Route path="/percentage-chart/settings/insert-data" component={InputData} />
      <Route path="/percentage-chart/settings/edit-bar" component={EditBarContainer} />
      <Route path="/percentage-chart/settings/style-bar" component={InputBar} />
      <Route path="/percentage-chart/settings/legend" component={Legend} />
    </Switch>
  </div>
);

export default DataPage;
