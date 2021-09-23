import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

class StarRating extends Component {
  render() {
    const starsAmout = 5;
    const { onClick, rating } = this.props;
    return (
      <div className="rating">
        {[...Array(starsAmout)]
          .map((_star, i) => {
            const ratingValue = i + 1;
            return (
              <label htmlFor={ i } key={ i }>
                <input
                  className="radio-button"
                  type="radio"
                  name="rating"
                  id={ i }
                  value={ ratingValue }
                  onClick={ onClick }
                />
                <FaStar
                  className="star"
                  color={ ratingValue <= rating ? '#ffc107' : '#e4e5e9' }
                  size={ 30 }
                />
              </label>
            );
          })}
      </div>
    );
  }
}

StarRating.propTypes = {
  onClick: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default StarRating;
