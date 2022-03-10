import React from 'react';
import Loading from './Loading';

class Login extends React.Component {
  render() {
    const {
      inputName,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick 
    } = this.props;
    return (
      <div data-testid="page-login">
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
        </fieldset>
        <Loading />
      </div>
    );
  }
}

export default Login;
