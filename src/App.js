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
import searchAlbumsAPI from './services/searchAlbumsAPI';
import Header from './componentes/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      isSaveButtonDisabled: true,
      isSearchButtonDisabled: true,
      logado: false,
      loading: false,
      inputSearch: '',
      searchMessege: false,
      novo: '',
      arrayNovo: '',
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
    const { inputName, inputSearch } = this.state;
    const isMajor = (inputName.length > 2);
    this.setState({
      isSaveButtonDisabled: !isMajor,
      isSearchButtonDisabled: inputSearch.length <= 1,
    });
  }

  // Inpirado na minha resolução no shoppingCart, usando o setTimeout
  // e https://stackoverflow.com/questions/34504322/settimeout-in-react-native

  onSaveButtonClick = () => {
    const magicNumber1500 = 1500;
    setTimeout(() => {
      this.setState({
        logado: true,
      });
    }, magicNumber1500);
    const { inputName } = this.state;
    createUser({ name: inputName });
    this.setState({
      loading: true,
    });
  }

  funcSearch = async () => {
    const { inputSearch } = this.state;
    const arrayNovoObj = await searchAlbumsAPI(inputSearch);
    this.setState({
      novo: inputSearch,
      searchMessege: true,
      inputSearch: '',
      arrayNovo: arrayNovoObj,
    });
  }

  render() {
    const { inputName,
      isSaveButtonDisabled,
      logado,
      loading,
      inputSearch,
      isSearchButtonDisabled,
      searchMessege, novo, arrayNovo } = this.state;
    return (
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
          <Route path="/search" exact>
            <Header inputName={ inputName } />
            <Search
              inputSearch={ inputSearch }
              isSearchButtonDisabled={ isSearchButtonDisabled }
              onInputChange={ this.onInputChange }
              funcSearch={ this.funcSearch }
              searchMessege={ searchMessege }
              novo={ novo }
              arrayNovo={ arrayNovo }
            />
          </Route>
          <Route
            path="/album/:id"
            exact
            render={ (props) => <Album { ...props } /> }
            inputName={ inputName }
          />
          <Route path="/favorites" exact>
            <Header inputName={ inputName } />
            <Favorites />
          </Route>
          <Route path="/profile" exact>
            <Header inputName={ inputName } />
            <Profile />
          </Route>
          <Route path="/profile/edit" exact>
            <Header inputName={ inputName } />
            <ProfileEdit />
          </Route>
          <Route path="/*" component={ NotFound } exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
