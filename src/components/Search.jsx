import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { handleClick, handleChange, query } = this.props;
    return (
      <div className="search-bar">
        <input
          onChange={ handleChange }
          type="text"
          data-testid="query-input"
          name="query"
          value={ query }
          placeholder="Digite sua busca"
        />
        <button
          className="search-button"
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Buscar
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
