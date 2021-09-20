import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoriesList from '../components/CategoriesList';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      storedCategories: undefined,
    };
  }

  async componentDidMount() {
    await getCategories().then((response) => this.setState({
      storedCategories: response,
    }));
  }

  render() {
    const { storedCategories } = this.state;
    return (
      <main>
        <aside>
          { storedCategories ? <CategoriesList categories={ storedCategories } /> : null }
        </aside>
        <article>
          <section>
            <p>Input de pesquisa</p>
            <CartButton />
          </section>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <section>chama função que renderiza produtos pesquisados</section>
        </article>
      </main>
    );
  }
}

export default Home;

