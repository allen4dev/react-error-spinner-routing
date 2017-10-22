import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  page: 1,
  fetching: false,
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
      return false;

    default:
      return state;
  }
}
const reducer = combineReducers({
  entities: entitiesReducer,
  page: pageReducer,
  fetching: fetchingReducer,
});

export default reducer;
