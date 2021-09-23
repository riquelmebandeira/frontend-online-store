import React, { Component } from 'react';
import CartItem from '../components/CartItem';

/**
 * Referência de onde descobrimos o método findIndex
 * Link: https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array/38516944
 */

/**
 * Todos os integrantes do grupo participaram desse requisito.
 */

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyCart: 'Seu carrinho está vazio', // mensagem mostrada quando carrinho está vazio
      products: [],
    };

    this.removeItem = this.removeItem.bind(this);
    this.cartList = this.cartList.bind(this);
  }

  componentDidMount() {
    this.cartList();
  }

  cartList = async () => {
    const products = JSON.parse(localStorage.getItem('itemID')) || [];
    this.setState({
      products,
    });
  };

  removeItem({ target }) {
    const productId = target.parentElement.id;
    const { products } = this.state;
    const productIndex = products.findIndex((product) => product.id === productId);
    console.log(productIndex);
    products.splice(productIndex, 1);
    this.setState({
      products,
    });
    localStorage.setItem('itemID', JSON.stringify(products));
  }

  render() {
    const { emptyCart, products } = this.state;

    if (products.length < 1) {
      return (
        <p data-testid="shopping-cart-empty-message">{ emptyCart }</p>
      );
    }
    return (
      <main>
        <section>
          { products.map((product) => (
            <CartItem
              key={ product.id }
              removeItem={ this.removeItem }
              id={ product.id }
              thumbnail={ product.thumbnail }
              title={ product.title }
              price={ product.price }
            />
          )) }
        </section>
      </main>
    );
  }
}

export default ShoppingCart; // Pagina destinada ao carrinho de compras.
