import React, { Component } from 'react';
import CategoriesList from '../components/CategoriesList';
import { getCategories } from '../services/api';

class ProductList extends Component {
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
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <aside>
          { storedCategories ? <CategoriesList categories={ storedCategories } /> : null }
        </aside>
      </div>
    );
  }
}

export default ProductList;
