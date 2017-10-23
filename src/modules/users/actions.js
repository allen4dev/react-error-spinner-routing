import * as actionTypes from './actionTypes';

import api from './../../utils/api';
import helpers from './../../utils/helpers';

// Action creators
export function setUsers(users) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users,
  };
}

export function requestUsers() {
  return {
    type: actionTypes.FETCH_USERS_REQUEST,
  };
}

// Async actions

export function fetchUsers() {
  return async dispatch => {
    dispatch(requestUsers());

    const response = await api.users.getUsers();
    const users = helpers.responseToObj(response);

    dispatch(setUsers(users));

    return users;
  };
}
