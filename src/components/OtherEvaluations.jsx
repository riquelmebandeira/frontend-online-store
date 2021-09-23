import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

class OtherEvaluations extends React.Component {
  ratingStars = (rating) => {
    const starsAmout = 5;
    return (
      <div className="old-rating">
        {[...Array(starsAmout)]
          .map((_star, i) => {
            const ratingValue = i + 1;
            return (
              <FaStar
                key={ i }
                className="star"
                color={ ratingValue <= rating ? '#ffc107' : '#e4e5e9' }
                size={ 15 }
              />
            );
          })}
      </div>
    );
  }

  render() {
    const { ratings } = this.props;
    return (
      <section className="old-evaluation-session">
        { ratings.map((rating, i) => (
          <div className="teste" key={ i }>
            <div className="email-and-rating-history">
              <p>{ rating.email }</p>
              <div className="old-rating">{ this.ratingStars(rating.rating) }</div>
            </div>
            <p className="old-comment">{ rating.comment }</p>
          </div>
        ))}
      </section>
    );
  }
}

OtherEvaluations.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default OtherEvaluations;
