import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../componentes/MusicCard';
import Header from '../componentes/Header';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      nomeDoArtista: '',
      nomeDoAlbum: '',
      musicas: [],
    };
  }

  // Ajuda de lógica e dicas técnicas:
  // Bruno Ro7 - T19-B- sugeriu desestruturar { id } no lugar id.id
  // Bruno Ro7 e Luá T19-A - Me ajudaram a entender a lógica e debugar meu código.
  // Arthur Procopio me judou a  debugar meu codigo.
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((music) => {
      this.setState({
        musicas: music.slice(1), // removendo objeto não suportado
        nomeDoAlbum: music[0].collectionName,
        nomeDoArtista: music[0].artistName,
      });
    });
  }

  render() {
    const { inputName } = this.props;
    const { musicas, nomeDoAlbum, nomeDoArtista } = this.state;
    // console.log('musicas 1:', musicas, 'col', nomeDoAlbum);
    // console.log('nomes', musicas[0].artistName[0]);
    return (
      <div data-testid="page-album">
        <Header inputName={ inputName } />
        <h2 data-testid="artist-name">{ nomeDoArtista }</h2>
        <p data-testid="album-name">
          {nomeDoAlbum}
        </p>
        {musicas.map((info) => (
          <MusicCard
            previewUrl={ info.previewUrl }
            key={ info.trackId }
            trackName={ info.trackName }
          />
        ))}

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default Album;
