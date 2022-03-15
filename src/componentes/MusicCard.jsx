import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      trueOrFalse: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  async onInputChange({ target }) {
    const { checked } = target;
    this.setState({
      loading: true,
      trueOrFalse: true,
    });

    const { enviaObjDoGetMusic } = this.props;
    // um objeto no mesmo formato que você recebe da API getMusics.
    await addSong(enviaObjDoGetMusic);
    if (checked) {
      this.setState({
        loading: true,
        trueOrFalse: false,
      });
      await getFavoriteSongs(enviaObjDoGetMusic);
    }
  }

  click = () => {
    const magicNumber1000 = 1000; // Observar - Tempo muito grande pode dar erro no Jest
    setTimeout(() => {
      this.setState({
        loading: false,
        trueOrFalse: true,
      });
    }, magicNumber1000);
    console.log('clicou');
  }

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { loading, trueOrFalse } = this.state;
    return (
      <div>
        {loading ? <Loading className="loading" />
          : (
            <>
              <p>
                {trackName}
              </p>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
              </audio>
              <label htmlFor="favoritas-checkbox">

                <input
                  id="favoritas-checkbox"
                  type="checkbox"
                  data-testid={ `checkbox-music-${trackId}` }
                  onChange={ this.onInputChange }
                  onClick={ this.click }
                  checked={ trueOrFalse }
                />
                Favorita
              </label>
            </>)}
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  enviaObjDoGetMusic: PropTypes.arrayOf.isRequired,
};

export default MusicCard;
