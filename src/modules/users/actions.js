import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

import api from './../../utils/api';

// Action creators
export const setUsers = createAction(actionTypes.FETCH_USERS_SUCCESS);

// Async actions

export const fetchUsers = createAction(
  'API',
  () => ({ success: setUsers }),
  () => ({
    apiEndpoint: api.users.getUsers,
    filter: 'users',
  })
);
