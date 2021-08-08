import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import CodePage from './pages/CodePage/CodePage';
import SetPage from './pages/SetPage/SetPage';
import SummaryPage from './pages/SummaryPage.jsx/SummaryPage';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/settings">Estilizar grafico</Link>
        <Link to="/code">codigo do estilo</Link>
        <Link to="/summary">Sumário</Link>
      </nav>
      <Switch>
        <Route path="/settings" component={SetPage} />
        <Route path="/code" component={CodePage} />
        <Route path="/summary" component={SummaryPage} />
      </Switch>
    </div>
  );
}

export default App;
