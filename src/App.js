import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="App-intro">
            Error message, loading spinner and routing.
          </h1>
        </div>
      </Provider>
    );
  }
}

export default App;
