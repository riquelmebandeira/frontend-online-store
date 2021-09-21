import React, { Component } from 'react';

class AddButton extends Component {
  handleClick = ({ target }) => {
    const productId = target.parentElement.id;
    const savedItem = JSON.parse(localStorage.getItem('itemID')) || []; // constroi objeto pelo que foi guardado no localStorage caso exista
    const response = [...savedItem, productId];
    localStorage.setItem('itemID', JSON.stringify(response)); // guarda id de um produto no localStorage para uso no shoppingCart
  }

  render() {
    return (
      <button
        type="submit"
        data-testid="product-add-to-cart"
        onClick={ this.handleClick }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

export default AddButton;
