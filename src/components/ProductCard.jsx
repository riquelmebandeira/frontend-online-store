import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    if (product.length < 1) return <h3>Nenhum produto foi encontrado</h3>;

    return (
      <>
        { product.map((product2) => (
          <div key={ product2.id } data-testid="product">
            <h4>{ product2.title }</h4>
            <img src={ product2.thumbnail } alt="Foto do produto" />
            <p>{ product2.price }</p>
          </div>))}
      </>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
