import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import { createUser } from './services/userAPI';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      isSaveButtonDisabled: true,
      logado: false,
      loading: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validando);
  }

  validando = () => {
    const { inputName } = this.state;
    const isMajor = inputName.length > 2;
    this.setState({
      isSaveButtonDisabled: !isMajor,
    });
  }
  // https://stackoverflow.com/questions/34504322/settimeout-in-react-native

  onSaveButtonClick = () => {
    setTimeout(() => {
      this.setState({
        logado: true,
      });
    }, 2000);
    const { inputName } = this.state;
    createUser({ name: inputName });
    this.setState({
      loading: true,
    });
  }

  render() {
    const { inputName, isSaveButtonDisabled, logado, loading } = this.state;
    return (
      <>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {logado ? <Redirect to="/search" /> : <Login
                inputName={ inputName }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
                loading={ loading }
              />}

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
