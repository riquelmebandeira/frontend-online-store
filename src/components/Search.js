import React, { Components } from 'react';
imp

class Search extends Components {
  render() {
    const { onClick, onChange } = this.props;
    return (
      <div>
        <input
          onChange={ onChange }
          type="text"
          data-testid="query-input"
        />
        <button
          data-testid="query-button"
          onClick={ onClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;