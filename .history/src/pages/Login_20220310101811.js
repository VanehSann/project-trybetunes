import React from 'react';

class Login extends React.Component {
  render() {
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
            />
          </label>
          <button data-testid="login-submit-button" type="button">Entrar</button>
        </fieldset>
      </div>
    );
  }
}

export default Login;
