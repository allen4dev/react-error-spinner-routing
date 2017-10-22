import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  page: 1,
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

function pageReducer(state = INITIAL_STATE.page, action = {}) {
  if (action.type === actionTypes.SET_POSTS) {
    return state + 1;
  }

  return state;
}

const reducer = combineReducers({
  entities: entitiesReducer,
  page: pageReducer,
});

export default reducer;
