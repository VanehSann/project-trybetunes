import React from 'react';

class Header extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">
          Teste
        </p>
      </header>
    );
  }
}

export default Header;
