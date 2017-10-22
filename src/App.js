import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import store from './store';

import Posts from './pages/Posts';
import Users from './pages/Users';
import Comments from './pages/Comments';

import Navigation from './shared/Navigation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/users" component={Users} />
            <Route path="/comments" component={Comments} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
