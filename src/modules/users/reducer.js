import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  fetching: false,
};

const entitiesReducer = handleAction(
  actionTypes.FETCH_USERS_SUCCESS,
  (state, action) => ({
    ...state,
    ...action.payload,
  }),
  INITIAL_STATE.entities
);

const fetchingReducer = handleActions(
  {
    REQUEST_RESOURCE: (state, action) => {
      if (action.payload.filter !== 'users') return state;
      return true;
    },
    [actionTypes.FETCH_USERS_SUCCESS]: () => false,
  },
  INITIAL_STATE.fetching
);

const reducer = combineReducers({
  entities: entitiesReducer,
  fetching: fetchingReducer,
});

export default reducer;
