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
    this.initialPrice = this.initialPrice.bind(this);
    this.calculatePrice = this.calculatePrice.bind(this);
  }

  componentDidMount() {
    this.cartList();
  }

  cartList = async () => {
    const products = await JSON.parse(localStorage.getItem('itemID')) || [];
    this.setState({
      products,
    });
    this.initialPrice(products);
  };

  handleClick = () => {
    this.setState({ total: 0 });
  }

  removeItem(id, price) {
    const productId = id;
    this.calculatePrice('-', price);
    const { products } = this.state;
    const productIndex = products.findIndex((product) => product.id === productId);
    products.splice(productIndex, 1);
    this.setState({
      products,
    });
    localStorage.setItem('itemID', JSON.stringify(products));
  }

  initialPrice(products) {
    if (products.length === 0) {
      return null;
    }
    products.forEach((product) => {
      this.setState((prevState) => ({
        total: `${(parseFloat(prevState.total) + product.price).toFixed(2)}`,
      }));
    });
  }

  calculatePrice(operator, price) {
    const { total } = this.state;
    if (operator === '+') {
      return this.setState((prevState) => ({
        total: `${(parseFloat(prevState.total) + price).toFixed(2)}`,
      }));
    }
    if (operator === '-' && price <= total) {
      this.setState((prevState) => ({
        total: `${(parseFloat(prevState.total) - price).toFixed(2)}`,
      }));
    }
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
          <Link to="/"><TiArrowBack /></Link>
          { products.map((product) => (
            <CartItem
              key={ product.id }
              removeItem={ this.removeItem }
              id={ product.id }
              thumbnail={ product.thumbnail }
              title={ product.title }
              price={ product.price }
              calculatePrice={ this.calculatePrice }
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
