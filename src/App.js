import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';
import './App.css';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route
            path="/product/:id"
            render={ (props) => <Product { ...props } /> }
          />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
