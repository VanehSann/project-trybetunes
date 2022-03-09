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
            <Route path="/" component={ Login } />
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Login } />
            <Route path="/favorites" component={ Login } />
            <Route path="/profile" component={ Login } />
            <Route path="/profile/edit" component={ Login } />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
