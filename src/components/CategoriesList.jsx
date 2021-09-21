import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    return (
      <>
        {
          categories.map(({ id, name }) => (
            <li key={ id }>
              <label htmlFor={ id } data-testid="category">
                <input
                  type="radio"
                  id={ id }
                  name="category"
                  onClick={ onClick }
                  value={ id }
                />
                { name }
              </label>
            </li>
          ))
        }
      </>);
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default CategoriesList;
