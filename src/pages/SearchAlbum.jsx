import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchAlbum extends React.Component {
  render() {
    const {
      image,
      collectionId,
      nameArt,
      collectionName,
      collectionPrice,
    } = this.props;

    return (
      <div>
        <img src={ image } alt={ collectionName } />
        <h3>{ collectionName }</h3>
        <p>{nameArt}</p>
        <strong>{collectionPrice }</strong>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          Saiba Mais
        </Link>

      </div>
    );
  }
}

SearchAlbum.propTypes = {
  image: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  nameArt: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionPrice: PropTypes.number.isRequired,
};

export default SearchAlbum;
