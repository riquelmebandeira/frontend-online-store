import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    if (product.length < 1) return <h3>Nenhum produto foi encontrado</h3>;

    return (
      <>
        { product.map((productInfos) => (
          <div key={ productInfos.id } data-testid="product">
            <Link
              data-testid="product-detail-link "
              to={ {
                pathname: `/product/${productInfos.id}`,
                state: { productInfos } } }
            >
              <h4>{ productInfos.title }</h4>
              <img src={ productInfos.thumbnail } alt="Foto do produto" />
              <p>{ productInfos.price }</p>
            </Link>
          </div>))}
      </>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
