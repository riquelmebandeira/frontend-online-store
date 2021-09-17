import React, { Component } from 'react';
import CartButton from '../components/CartButton';

// alteração do nome do componente
class Home extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />
      </div>
    );
  }
}

export default Home;
