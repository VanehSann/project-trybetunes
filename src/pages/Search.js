import React from 'react';
import PropTypes from 'prop-types';
import SearchAlbum from './SearchAlbum';

class Search extends React.Component {
  render() {
    const {
      inputSearch,
      isSearchButtonDisabled,
      onInputChange,
      funcSearch,
      searchMessege,
      novo,
      arrayNovo,
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
            onClick={ funcSearch }
          >
            Pesquisar
          </button>
        </fieldset>
        {
          searchMessege
          && (
            <p>
              Resultado de álbuns de:
              {' '}
              { novo }
            </p>)
        }
        { (arrayNovo.length <= 0) ? <p>Nenhum álbum foi encontrado</p>
          : (arrayNovo
            .map((novoArr) => (<SearchAlbum
              image={ novoArr.artworkUrl100 }
              key={ novoArr.collectionId }
              collectionId={ novoArr.collectionId }
              nameArt={ novoArr.artistName }
              collectionName={ novoArr.collectionName }
              collectionPrice={ novoArr.collectionPrice }
            />)))}
        {console.log(arrayNovo)}
      </div>
    );
  }
}

// [
//   {
//     artistId: 12,
//     artistName: "Artist Name",
//     collectionId: 123,
//     collectionName: "Collection Name",
//     collectionPrice: 12.25,
//     artworkUrl100: "https://url-to-image",
//     releaseDate: "2012-03-02T08:00:00Z",
//     trackCount: 8,
//   }
// ]

// Referências e explicações que me ajudaram a entender e debugar.

// Leo Araujo - Turma 19-A me ajudou a debugar o jest, sugerindo adicionar o espaço {' '}.
// Também mostrou a documentação da Tryunfo ensinando formas de usar o && (analogia do && == entao), no lugar de ternário true ? true : false
// Enquanto debugavamos, ele reforçou o readme do requisito pra mim, trazendo mais entendimento e lógica.
// E explicou o porque seria ideial, criar todos os códigos do Search no proprio, ao invés de no pai(App).

Search.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  isSearchButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  funcSearch: PropTypes.func.isRequired,
  searchMessege: PropTypes.bool.isRequired,
  novo: PropTypes.string.isRequired,
  arrayNovo:
    PropTypes.arrayOf({
      artistId: PropTypes.number,
      artistName: PropTypes.string,
      collectionId: PropTypes.number,
      collectionName: PropTypes.string,
      collectionPrice: PropTypes.number,
      artworkUrl100: PropTypes.string,
      releaseDate: PropTypes.string,
      trackCount: PropTypes.number,
    }).isRequired,
};

export default Search;
