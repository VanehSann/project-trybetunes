import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      nameUser: [],
      loading: true,
    };
  }

  componentDidMount() {
    getUser().then((userResponse) => {
      this.setState({
        nameUser: userResponse,
        loading: false,
      });
    });
  }

  render() {
    const { nameUser, loading } = this.state;
    return (
      <header data-testid="header-component">
        <Link to="/search" data-testid="link-to-search"> Search </Link>
        <Link to="/favorites" data-testid="link-to-favorites"> Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile"> Profile </Link>
        <p data-testid="header-user-name" name="inputName">
          { loading ? <Loading /> : nameUser.name }
        </p>
      </header>
    );
  }
}

export default Header;
