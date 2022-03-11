import React from 'react';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">
          { getUser }
          {' '}
        </p>
      </header>
    );
  }
}

export default Header;
