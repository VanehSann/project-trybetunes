import React from 'react';

class Header extends React.Component {
  render() {
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