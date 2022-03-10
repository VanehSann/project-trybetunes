import React from 'react';

class Login extends React.Component {
  onSaveButtonClick = async () => {
    const { inputName } = this.state;
    await createUser(inputName);
    console.log('funciona');
  }

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
            onClick={ this.onSaveButtonClick }
          >
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

export default Login;
