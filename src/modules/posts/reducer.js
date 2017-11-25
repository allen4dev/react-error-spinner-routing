import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  page: 1,
  fetching: false,
  error: null,
};

const entitiesReducer = handleAction(
  actionTypes.FETCH_POSTS_SUCCESS,
  (state, action) => ({ ...state, ...action.payload }),
  INITIAL_STATE.entities
);

const pageReducer = handleAction(
  actionTypes.FETCH_POSTS_SUCCESS,
  state => state + 1,
  INITIAL_STATE.page
);

const fetchingReducer = handleActions(
  {
    REQUEST_RESOURCE: (state, action) => {
      if (action.payload.filter !== 'posts') return state;
      return true;
    },
    [actionTypes.FETCH_POSTS_SUCCESS]: () => false,
    REQUEST_RESOURCE_FAIL: (state, action) => {
      if (action.payload.filter !== 'posts') return state;
      return false;
    },
  },
  INITIAL_STATE.fetching
);

const errorReducer = handleActions(
  {
    REQUEST_RESOURCE_FAIL: (state, action) => {
      if (action.payload.filter !== 'posts') return state;
      return action.payload.response.message;
    },
    REQUEST_RESOURCE: (state, action) => {
      if (action.payload.filter !== 'posts') return state;
      return null;
    },
    [actionTypes.FETCH_POSTS_SUCCESS]: () => null,
  },
  INITIAL_STATE.error
);

const reducer = combineReducers({
  entities: entitiesReducer,
  page: pageReducer,
  fetching: fetchingReducer,
  error: errorReducer,
});

export default reducer;
