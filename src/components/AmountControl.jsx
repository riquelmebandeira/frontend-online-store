import React from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
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
        <TiChevronLeftOutline
          size="2em"
          className="amount-button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseQty }
        />
        <span data-testid="shopping-cart-product-quantity">{ productAmount }</span>
        <TiChevronRightOutline
          size="2em"
          className="amount-button"
          data-testid="product-increase-quantity"
          onClick={ this.increaseQty }
        />
      </div>
    );
  }
}

export default AmountControl;
