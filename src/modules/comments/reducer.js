import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  fetching: false,
  page: 1,
};

const entitiesReducer = handleAction(
  actionTypes.FETCH_COMMENTS_SUCCESS,
  (state, action) => ({ ...state, ...action.payload }),
  INITIAL_STATE.entities
);

const fetchingReducer = handleActions(
  {
    REQUEST_RESOURCE: (state, action) => {
      if (action.payload.filter !== 'comments') return state;
      return true;
    },
    [actionTypes.FETCH_COMMENTS_SUCCESS]: () => false,
  },
  INITIAL_STATE.fetching
);

const pageReducer = handleAction(
  [actionTypes.FETCH_COMMENTS_SUCCESS],
  state => state + 1,
  INITIAL_STATE.page
);

const reducer = combineReducers({
  entities: entitiesReducer,
  fetching: fetchingReducer,
  page: pageReducer,
});

export default reducer;
