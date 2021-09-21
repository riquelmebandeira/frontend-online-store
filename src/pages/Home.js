import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import ProductCard from '../components/ProductCard';
import CategoriesList from '../components/CategoriesList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedCategories: undefined,
      query: '',
      categoryId: '',
      searchResult: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  async componentDidMount() {
    await getCategories()
      .then((response) => this.setState({ storedCategories: response }));
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  }

  async handleClick() {
    const { query, categoryId } = this.state;
    const products = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ searchResult: products.results });
  }

  async handleClick2({ target }) {
    const { query } = this.state;
    this.setState({ categoryId: target.id });
    const categoryId = target.id;
    const products = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ searchResult: products.results });
  }

  render() {
    const { storedCategories, query, searchResult } = this.state;
    return (
      <main>
        <aside>
          { storedCategories ? <CategoriesList
            onClick={ this.handleClick2 }
            categories={ storedCategories }
          /> : null }
        </aside>
        <article>
          <section className="top-bar">
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
          <section>
            { searchResult ? <ProductCard product={ searchResult } /> : null }
          </section>
        </article>
      </main>
    );
  }
}

export default Home;
