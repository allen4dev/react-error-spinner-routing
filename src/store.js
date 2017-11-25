import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';

import apiMiddleware from './modules/middlewares/apiMiddleware';

import rootReducer from './rootReducer';

const middlewares = [apiMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
