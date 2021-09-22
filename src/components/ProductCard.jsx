import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    if (product.length < 1) return <h3>Nenhum produto foi encontrado</h3>;
    
    return (
      <div>
        { product.map((productInfo) => (
          <div
            key={ productInfo.id }
            data-testid="product"
            id={ productInfo.id }
          >
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
            <AddButton productInfo={ productInfo }/>
          </div>))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
