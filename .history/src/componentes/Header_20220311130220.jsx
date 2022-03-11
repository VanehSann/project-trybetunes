import React from 'react';
import { getUser } from '../services/userAPI';

console.log(getUser());

class Header extends React.Component {
  render() {
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name" name="inputName">
          testando
        </p>
      </header>
    );
  }
}

export default Header;
