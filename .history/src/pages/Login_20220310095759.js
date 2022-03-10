import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <label htmlFor="login-name-input">
          <inpút data-testid="login-name-input" id="login-name-input" type="text" />
        </label>
        <button data-testid="login-submit-button" type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
