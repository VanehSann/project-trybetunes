import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const {
      inputSearch,
      isSearchButtonDisabled,
      onInputChange,
    } = this.props;
    return (
      <div data-testid="page-search">
        <fieldset>
          <label htmlFor="inputSearch">
            <input
              data-testid="search-artist-input"
              id="inputSearch"
              type="text"
              name="inputSearch"
              onChange={ onInputChange }
              value={ inputSearch }
            />
          </label>
          <button
            data-testid="search-artist-button"
            type="button"
            id="isSearchButtonDisabled"
            name="isSearchButtonDisabled"
            disabled={ isSearchButtonDisabled }
          >
            Pesquisar
          </button>
        </fieldset>
      </div>
    );
  }
}

Search.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  isSearchButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Search;
