import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import CartItem from '../components/CartItem';
import './ShoppingCart.css';

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
      total: 0,
    };

    this.removeItem = this.removeItem.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  componentDidMount() {
    this.cartList();
  }

  cartList = async () => {
    const products = await JSON.parse(localStorage.getItem('itemID')) || [];
    this.setState({
      products,
    });
    this.totalPrice(products);
  };

  handleClick = () => {
    this.setState({ total: 0 });
  }

  removeItem({ target }) {
    const productId = target.id;
    const { products } = this.state;
    const productIndex = products.findIndex((product) => product.id === productId);
    products.splice(productIndex, 1);
    this.setState({
      products,
    });
    localStorage.setItem('itemID', JSON.stringify(products));
  }

  totalPrice(products) {
    if (products.length === 0) {
      return null;
    }
    products.forEach((product) => {
      const { total } = this.state;
      const sumTotal = total + product.price;
      this.setState({ total: sumTotal });
    });
  }

  render() {
    const { emptyCart, products, total } = this.state;
    if (products.length < 1) {
      return (
        <div>
          <Link to="/"><TiArrowBack size="2em" /></Link>
          <p data-testid="shopping-cart-empty-message">{ emptyCart }</p>
        </div>
      );
    }
    return (
      <main className="main-shopping-cart">
        <div className="header">
          <h3>Seu carrinho de compras:</h3>
          <Link to="/"><TiArrowBack size="2em" /></Link>
        </div>
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
          ))}
        </section>
        <section className="total-price">
          { `Valor Total da Compra: R$ ${total}` }
          <Link to="/checkout">
            <button
              data-testid="checkout-products"
              className="finalizar-button"
              type="button"
            >
              Finalizar Compra
            </button>
          </Link>
        </section>
      </main>
    );
  }
}

export default ShoppingCart; // Pagina destinada ao carrinho de compras.
