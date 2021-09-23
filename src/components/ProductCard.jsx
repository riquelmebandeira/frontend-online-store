import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    if (product.length < 1) return <h3>Nenhum produto foi encontrado</h3>;
    return (
      <>
        { product.map((productInfo) => (
          <div className="product-and-addtocart-button" key={ productInfo.id }>
            <div
              data-testid="product"
              id={ productInfo.id }
            >
              <Link
                className="product-link"
                data-testid="product-detail-link "
                to={ {
                  pathname: `/product/${productInfo.id}`,
                  state: { productInfo } } }
              >
                <h4>{ productInfo.title }</h4>
                <img src={ productInfo.thumbnail } alt="Foto do produto" />
                <p>{ productInfo.price }</p>
              </Link>
            </div>
            <AddButton testid="product-add-to-cart" productInfo={ productInfo } />
          </div>))}
      </>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
