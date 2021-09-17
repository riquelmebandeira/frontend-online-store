import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <>
        {
          categories.map(({ id, name }) => (
            <label htmlFor={ id } key={ id } data-testid="category">
              <input type="radio" id={ id } />
              { name }
            </label>
          ))
        }
      </>);
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default CategoriesList;
