import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  page: 1,
  fetching: false,
  error: null,
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

function pageReducer(state = INITIAL_STATE.page, action = {}) {
  if (action.type === actionTypes.FETCH_POSTS_SUCCESS) {
    return state + 1;
  }

  return state;
}

function fetchingReducer(state = INITIAL_STATE.fetching, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST:
      return true;

    case actionTypes.FETCH_POSTS_SUCCESS:
    case actionTypes.FETCH_POSTS_FAILURE:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = INITIAL_STATE.error, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_FAILURE:
      return action.payload;

    case actionTypes.FETCH_POSTS_REQUEST:
    case actionTypes.FETCH_POSTS_SUCCESS:
      return null;

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  page: pageReducer,
  fetching: fetchingReducer,
  error: errorReducer,
});

export default reducer;
