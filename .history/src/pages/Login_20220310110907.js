import React from 'react';

class Login extends React.Component {
  render() {
    const { inputName, isSaveButtonDisabled, onInputChange } = this.props;
    return (
      <div data-testid="page-login">
        <fieldset>
          <label htmlFor="loginName">
            Nome
            <input
              data-testid="login-name-input"
              id="loginName"
              type="text"
              name="loginName"
              onChange={ onInputChange }
              value={ inputName }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ isSaveButtonDisabled }
          >
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

export default Login;
