import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyCart: 'Seu carrinho está vazio', // mensagem mostrada quando carrinho está vazio
      products: [], // array com produtos
    };
  }

  componentDidMount() {
    this.cartList();
  }

  cartList = async () => {
    const productId = JSON.parse(localStorage.getItem('itemID')) || [];
    productId.forEach(async (id) => { // adiciona produto ao estado
      const productApi = await fetch(`https://api.mercadolibre.com/items/${id}`); // api de um produto especifico
      const product = await productApi.json();
      this.setState((prevState) => ({
        products: [...prevState.products, product], // adiciona o produto ao estado junto dos produto anteriores
      }));
    });
  }

  /* renderList() {
    const { products, emptyCart } = this.state;
    if (products === []) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">
            { emptyCart }
          </p>
        </div>
      );
    }

    return (
      <div>
        { products.map((product) => (
          <p key={ product.id } data-testid="shopping-cart-product-name">
            {product.title}
            <span data-testid="shopping-cart-product-quantity">1</span>
          </p>
        )) }
      </div>
    );
  } */

  render() {
    const { products, emptyCart } = this.state;
    return (
      <div>
        <div>
          <p data-testid="shopping-cart-empty-message">
            { emptyCart }
          </p>
        </div>
        <div>
          { products.map((product) => (
            <p key={ product.id } data-testid="shopping-cart-product-name">
              {product.title}
              <span data-testid="shopping-cart-product-quantity">1</span>
            </p>
          )) }
        </div>
      </div>
    );
  }
}

export default ShoppingCart; // Pagina destinada ao carrinho de compras.
