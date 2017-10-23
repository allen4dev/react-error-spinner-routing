import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  fetching: false,
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

function fetchingReducer(state = INITIAL_STATE.fetching, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return true;

    case actionTypes.FETCH_USERS_SUCCESS:
      return false;

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  fetching: fetchingReducer,
});

export default reducer;
