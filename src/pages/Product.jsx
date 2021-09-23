import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import CartButton from '../components/CartButton';
import Evaluations from '../components/Evaluations';
import AddButton from '../components/AddButton';
import './Product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { productInfo } } } = this.props;
    document.title = productInfo.title;
  }

  render() {
    const { location: { state: { productInfo } } } = this.props;
    const { title, thumbnail, price, attributes, id } = productInfo;
    return (
      <main className="product-detail-infos">
        <div className="product-price-title-buttons">
          <p data-testid="product-detail-name">{ title }</p>
          <p className="product-detail-price">{ `R$ ${price}` }</p>
          <div className="product-detail-buttons">
            <Link to="/"><TiArrowBack /></Link>
            <CartButton />
          </div>
        </div>
        <section className="imagem-e-especif-tecnicas">
          <div className="image-div">
            <img
              src={ thumbnail }
              alt={ title }
              className="details-image"
            />
          </div>
          <ul className="especif-tecnicas">
            <h3 className="h3">Especificações Técnicas:</h3>
            { attributes
              .map((atribute, index) => (
                <li
                  className="tecninal-li"
                  key={ index }
                >
                  { atribute.value_name }
                </li>)) }
          </ul>
        </section>
        <div className="button-div">
          <AddButton
            productInfo={ productInfo }
            testid="product-detail-add-to-cart"
            id={ id }
          />
        </div>
        <Evaluations productID={ id } />
      </main>
    );
  }
}

Product.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Product;
