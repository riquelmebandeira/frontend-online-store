import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // https://react-icons.github.io/react-icons/icons?name=fa

class CartButton extends Component {
  render() {
    return (
      <div className="cart-button">
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <FaShoppingCart />
        </Link>
      </div>
    );
  }
}

export default CartButton; // Componente criado para ser usado futuramente se preciso.
