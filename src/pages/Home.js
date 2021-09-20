import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoriesList from '../components/CategoriesList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      storedCategories: undefined,
      query: '',
      categoryId: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    await getCategories()
      .then((response) => this.setState({ storedCategories: response }));
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  }

  async handleClick() {
    console.log('clique');
    const { query, categoryId } = this.state;
    const products = await getProductsFromCategoryAndQuery(categoryId, query);
    console.log(products);
  }

  render() {
    const { storedCategories, query } = this.state;
    return (
      <main>
        <aside>
          { storedCategories ? <CategoriesList categories={ storedCategories } /> : null }
        </aside>
        <article>
          <section>
            <Search
              handleClick={ this.handleClick }
              handleChange={ this.handleChange }
              query={ query }
            />
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
