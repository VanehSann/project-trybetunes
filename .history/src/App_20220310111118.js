import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validando);
  }

  validando = () => {
    const { inputName } = this.state;
    const isNotEmpty = inputName.length > 0;
    this.setState({
      isSaveButtonDisabled: !isNotEmpty,
    });
  }

  render() {
    const { inputName, isSaveButtonDisabled } = this.state;
    return (
      <>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Login
                inputName={ inputName }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onInputChange={ this.onInputChange }
              />
            </Route>
            <Route path="/search" component={ Search } exact />
            <Route path="/album/:id" component={ Album } exact />
            <Route path="/favorites" component={ Favorites } exact />
            <Route path="/profile" component={ Profile } exact />
            <Route path="/profile/edit" component={ ProfileEdit } exact />
            <Route path="/*" component={ NotFound } exact />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
