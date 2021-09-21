import React from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    if (product.length < 1) return <h3>Nenhum produto foi encontrado</h3>;

    return (
      <div>
        { product.map((productInfos) => (
          <div
            key={ productInfos.id }
            data-testid="product"
            id={ productInfos.id }
          >
            <h4>{ productInfos.title }</h4>
            <img src={ productInfos.thumbnail } alt="Foto do produto" />
            <p>{ productInfos.price }</p>
            <AddButton />
          </div>))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
