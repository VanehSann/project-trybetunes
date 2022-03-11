import React from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  render() {

    console.lo(getUser(inputName));
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name" name="inputName">
          d
        </p>
      </header>
    );
  }
}

export default Header;
