import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    if (product.length < 1) return <h3>Nenhum produto foi encontrado</h3>;

    return (
      <>
        { albums.map(({
          id,
          title,
          price,
          thumbnail,
        }) => (
          <div key={ id } data-testid="product">
            <h4>{ title }</h4>
            <img src={ thumbnail } alt="Foto do produto" />
            <p>{ price }</p>
          </div>))}
      </>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
