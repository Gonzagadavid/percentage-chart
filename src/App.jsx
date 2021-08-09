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
        <Link to="/percentage-chart">Início</Link>
        <Link to="/percentage-chart/settings">Estilizar Gráfico</Link>
        <Link to="/percentage-chart/code">Código do Estilo</Link>
        <Link to="/percentage-chart/summary">Sumário</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/percentage-chart" component={Home} />
          <Route path="/percentage-chart/settings" component={SetPage} />
          <Route path="/percentage-chart/code" component={CodePage} />
          <Route path="/percentage-chart/summary" component={SummaryPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
