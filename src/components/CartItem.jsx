import React from 'react';
import PropTypes from 'prop-types';
import AmountControl from './AmountControl';
import '../pages/ShoppingCart.css';

class CartItem extends React.Component {
  render() {
    const { removeItem, id, thumbnail, title, price, teste } = this.props;
    return (
      <div className="cart-item">
        <button
          id={ id }
          className="remove-button"
          type="button"
          onClick={ removeItem }
        >
          Remover
        </button>
        <img src={ thumbnail } alt="Foto do produto" />
        <p data-testid="shopping-cart-product-name">
          { title }
        </p>
        <AmountControl teste={ teste } />
        <h3>
          { price }
        </h3>
      </div>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.string,
  removeItem: PropTypes.func,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  teste: PropTypes.func,
}.isRequired;

export default CartItem;
