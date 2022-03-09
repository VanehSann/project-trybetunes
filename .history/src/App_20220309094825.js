import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Login } exact />
            <Route path="/search" component={ Search } exact />
            <Route path="/album/:id" component={ Login } exact />
            <Route path="/favorites" component={ Login } exact />
            <Route path="/profile" component={ Login } exact />
            <Route path="/profile/edit" component={ Login } exact />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
