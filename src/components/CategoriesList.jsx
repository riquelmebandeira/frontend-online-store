import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    return (
      <>
        {
          categories.map(({ id, name }) => (
            <li className="aside-li" key={ id }>
              <label htmlFor={ id } data-testid="category" className="aside-label">
                <input
                  type="radio"
                  id={ id }
                  className="category-input"
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
