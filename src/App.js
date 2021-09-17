import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ProductList from './pages/ProductList';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
