import React from 'react';
import PropTypes from 'prop-types';
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
            <h4>{ productInfo.title }</h4>
            <img src={ productInfo.thumbnail } alt="Foto do produto" />
            <p>{ productInfo.price }</p>
            <AddButton productInfo={ productInfo } />
          </div>))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
