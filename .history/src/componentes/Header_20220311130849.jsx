import React from 'react';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      nameUser: [],
    };
  }

  componentDidMount() {
    getUser().then((userResponse) => {
      this.setState({
        nameUser: userResponse,
      });
    });
  }

  render() {
    const { nameUser } = this.state;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name" name="inputName">
          { nameUser }
        </p>
      </header>
    );
  }
}

export default Header;
