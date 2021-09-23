import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import OtherEvaluations from './OtherEvaluations';

class Evaluations extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      comment: '',
      rating: 0,
      ratings: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.evaluationsCheck();
  }

  handleClick = () => {
    const { email, comment, rating, ratings } = this.state;
    const { productID } = this.props;
    const presentRating = {
      email,
      comment,
      rating,
    };
    ratings.push(presentRating);
    localStorage.setItem(productID, JSON.stringify(ratings));
    this.setState({
      ratings,
      email: '',
      comment: '',
      rating: 0,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  evaluationsCheck = () => {
    const { productID } = this.props;
    const oldRatings = JSON.parse(localStorage.getItem(productID) || '[]'); // Referencia -> https://stackoverflow.com/questions/43762363/how-to-store-an-array-of-objects-in-local-storage
    if (oldRatings.length > 0) {
      this.setState({ ratings: oldRatings });
    }
  }

  emailAndRating = () => {
    const { email, rating } = this.state;
    return (
      <div className="email-and-rate">
        <input
          placeholder="Email:"
          name="email"
          value={ email }
          type="email"
          id="evaluation-email"
          onChange={ this.handleChange }
        />
        <StarRating rating={ rating } onClick={ this.handleChange } />
      </div>
    );
  }

  render() {
    const { ratings, comment } = this.state;
    return (
      <div>
        <h1>Avaliações</h1>
        <section className="evaluation-session">
          <form>
            { this.emailAndRating() }
            <textarea
              onChange={ this.handleChange }
              name="comment"
              value={ comment }
              rows="5"
              cols="35"
              data-testid="product-detail-evaluation"
              placeholder="Deixe uma mensagem (opcional)"
            />
            <button type="button" onClick={ this.handleClick }>Avaliar</button>
          </form>
        </section>
        <OtherEvaluations ratings={ ratings } />
      </div>
    );
  }
}

Evaluations.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default Evaluations;
