import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class Login extends React.Component {
  render() {
    const {
      inputName,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      loading,
    } = this.props;
    return (
      <div data-testid="page-login">
        { loading ? <Loading />
          : (
            <fieldset>
              <label htmlFor="loginName">
                Nome
                <input
                  data-testid="login-name-input"
                  id="loginName"
                  type="text"
                  name="inputName"
                  onChange={ onInputChange }
                  value={ inputName }
                />
              </label>
              <button
                data-testid="login-submit-button"
                type="button"
                disabled={ isSaveButtonDisabled }
                onClick={ onSaveButtonClick }
              >
                Entrar
              </button>
            </fieldset>) }
      </div>
    );
  }
}

Login.propTypes = {
  inputName: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Login;
