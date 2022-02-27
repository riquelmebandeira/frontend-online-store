import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import ProductCard from '../components/ProductCard';
import CategoriesList from '../components/CategoriesList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';
import '../components/ProductCard.css';
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
  }

  async componentDidMount() {
    await getCategories()
      .then((response) => this.setState({ storedCategories: response }));
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  }

  // target é o botão das categorias
  async handleClick({ target }) {
    const { query } = this.state;
    if (target.id) { // checa se onde foi clicado tem um ID
      const products = await getProductsFromCategoryAndQuery(target.id, query);
      this.setState({
        categoryId: target.id,
        searchResult: products.results,
      });
    }
    const { categoryId } = this.state;
    const products = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ searchResult: products.results });
  }

  render() {
    const { storedCategories, query, searchResult } = this.state;
    return (
      <main>
        <aside>
          { storedCategories ? <CategoriesList
            onClick={ this.handleClick }
            categories={ storedCategories }
          /> : null }
        </aside>
        <article className="main-section">
          <section className="searchBar-and-cartButton">
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
          <section className="products-list">
            { searchResult ? <ProductCard product={ searchResult } /> : null }
          </section>
        </article>
      </main>
    );
  }
}

export default Home;
