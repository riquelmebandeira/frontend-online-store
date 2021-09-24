import React from 'react';
import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';
import AmountControl from './AmountControl';
import '../pages/ShoppingCart.css';

class CartItem extends React.Component {
  render() {
    const { removeItem, id, thumbnail, title, price, calculatePrice } = this.props;
    return (
      <div className="cart-item">
        <TiDeleteOutline
          size="3em"
          id={ id }
          className="remove-button"
          onClick={ removeItem }
        />
        <img src={ thumbnail } alt="Foto do produto" />
        <p data-testid="shopping-cart-product-name">
          { title }
        </p>
        <AmountControl calculatePrice={ calculatePrice } price={ price } />
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
  calculatePrice: PropTypes.func,
}.isRequired;

export default CartItem;
