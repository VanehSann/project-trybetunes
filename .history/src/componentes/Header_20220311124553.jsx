import React from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  render() {
    const { inputName } = this.props;
    console.lo(getUser(inputName));
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">
          { inputName }
        </p>
      </header>
    );
  }
}

export default Header;
