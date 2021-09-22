import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { productInfo } = this.props;
    const savedItem = JSON.parse(localStorage.getItem('itemID')) || []; // constroi objeto pelo que foi guardado no localStorage caso exista
    const response = [...savedItem, productInfo];
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

AddButton.propTypes = {
  productInfo: PropTypes.object,
}.isRequired;

export default AddButton;
