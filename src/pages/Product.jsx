import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Image from '../components/Image';
// import ProductDatail from '../components/ProductDatail';
import { TiArrowBack } from 'react-icons/ti';
import CartButton from '../components/CartButton';

class Product extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { productInfos } } } = this.props;
    document.title = productInfos.title;
  }

  render() {
    const { location: { state: { productInfos } } } = this.props;
    const { title, thumbnail, price, attributes } = productInfos;
    return (
      <main>
        <section>
          <Link to="/">
            <TiArrowBack />
          </Link>
          <CartButton />
        </section>
        <section>
          <h2 data-testid="product-detail-name">{ `${title} - ${price}` }</h2>
          <section>
            <img
              src={ thumbnail }
              alt={ title }
            />
            <div>
              <h4>Especificações Técnicas</h4>
              <ul>
                { attributes
                  .map((atribute, index) => (
                    <li
                      key={ index }
                    >
                      { atribute.value_name }
                    </li>)) }
              </ul>
            </div>
          </section>
        </section>
      </main>
    );
  }
}

Product.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Product;
