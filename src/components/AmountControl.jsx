import React from 'react';
import './AmountControl.css';

class AmountControl extends React.Component {
  constructor() {
    super();
    this.state = {
      productAmount: 1,
    };

    this.decreaseQty = this.decreaseQty.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
  }

  decreaseQty() {
    // const { teste } = this.props;
    const { productAmount } = this.state;
    if (productAmount > 1) {
      this.setState((prevState) => ({
        productAmount: prevState.productAmount - 1,
      }));
    }
  }

  increaseQty() {
    this.setState((prevState) => ({
      productAmount: prevState.productAmount + 1,
    }));
  }

  render() {
    const { productAmount } = this.state;
    return (
      <div className="amount-control">
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQty }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ productAmount }</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQty }
        >
          +
        </button>
      </div>
    );
  }
}

export default AmountControl;
