import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaymentIcon from 'react-payment-icons-inline';
import { TiArrowBack } from 'react-icons/ti';
import CartItem from '../components/CartItem';
import './Checkout.css';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { products, total } = this.state;
    return (
      <main className="checkout">
        <div className="header">
          <h3>Revise seus Produtos</h3>
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
          { `Total: R$ ${total}` }
        </section>
        <section className="form">
          <h3>Informações do Comprador</h3>
          <div className="form-linha-1">
            <input
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome Completo"
            />
            <input data-testid="checkout-cpf" type="text" placeholder="CPF" />
            <input data-testid="checkout-email" type="email" placeholder="Email" />
            <input data-testid="checkout-phone" type="text" placeholder="Telefone" />
          </div>
          <div className="form-linha-2">
            <input
              data-testid="checkout-cep"
              type="text"
              placeholder="CEP"
              className="cep-input"
            />
            <input
              data-testid="checkout-address"
              type="text"
              placeholder="Endereço Completo"
            />
          </div>
          <div className="form-linha-3">
            <input type="text" placeholder="Complemento" />
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Cidade" />
            <select placeholder="Estado">
              <option value="Amazonas">Amazonas</option>
              <option value="Ceará">Ceará</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Santa Catarina">Santa Catarina</option>
            </select>
          </div>
        </section>
        <section className="forma-de-pagamento">
          <h3>Método de Pagamento</h3>
          <div className="metodo-pagamento">
            <p className="p-boleto">Boleto:</p>
            <div className="input-payment">
              <input type="radio" name="payment" />
              <img
                src="https://www.ladylindacosmeticos.com.br/view/_image/forma_pagamento/boleto-cartoes.png"
                alt="boleto"
                style={ { margin: 0, width: 60 } }
              />
            </div>
            <p className="p-outros">Cartão de Crédito:</p>
            <div className="input-payment">
              <input type="radio" name="payment" />
              <PaymentIcon icon="visa" style={ { margin: 0, width: 50 } } />
            </div>
            <div className="input-payment">
              <input type="radio" name="payment" />
              <PaymentIcon icon="mastercard" style={ { margin: 0, width: 50 } } />
            </div>
            <p className="p-outros">Outros:</p>
            <div className="input-payment">
              <input type="radio" name="payment" />
              <PaymentIcon icon="pagseguro" style={ { margin: 0, width: 50 } } />
            </div>
            <div className="input-payment">
              <input type="radio" name="payment" />
              <PaymentIcon icon="wallet" style={ { margin: 0, width: 50 } } />
            </div>
          </div>
        </section>
        <button
          className="checkout-button"
          data-testid="checkout-products"
          type="button"
        >
          Comprar
        </button>
      </main>
    );
  }
}

export default Checkout; // Componente criado para ser usado futuramente se preciso.
