import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import CodePage from './pages/CodePage/CodePage';
import Home from './pages/Home/Home';
import SetPage from './pages/SetPage/SetPage';
import SummaryPage from './pages/SummaryPage.jsx/SummaryPage';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/stylized-percentage-chart">Início</Link>
        <Link to="/stylized-percentage-chart/settings">Estilizar Gráfico</Link>
        <Link to="/stylized-percentage-chart/code">Código do Estilo</Link>
        <Link to="/stylized-percentage-chart/summary">Sumário</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/stylized-percentage-chart" component={Home} />
          <Route path="/stylized-percentage-chart/settings" component={SetPage} />
          <Route path="/stylized-percentage-chart/code" component={CodePage} />
          <Route path="/stylized-percentage-chart/summary" component={SummaryPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
