import React from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  // const magicNumber3000 = 3000;
  // setTimeout(() => {
  //   this.setState({
  //     loading: true,
  //   });
  // }, magicNumber3000);
  
  render() {
    console.lo(getUser());

    const { loading } = this.state;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">
          { loading ? <Loading />
            : Teste}
        </p>
      </header>
    );
  }
}

export default Header;
