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
        <Link to="/">Início</Link>
        <Link to="/settings">Estilizar Gráfico</Link>
        <Link to="/code">Código do Estilo</Link>
        <Link to="/summary">Sumário</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={SetPage} />
          <Route path="/code" component={CodePage} />
          <Route path="/summary" component={SummaryPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
