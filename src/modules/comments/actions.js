import * as actionTypes from './actionTypes';

import api from './../../utils/api';
import helpers from './../../utils/helpers';

// Action creators
export function setComments(comments) {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
}

export function requestComments() {
  return {
    type: actionTypes.FETCH_COMMENTS_REQUEST,
  };
}

// Async actions

export function fetchComments() {
  return async (dispatch, getState) => {
    dispatch(requestComments());

    const page = getState().comments.page;
    const response = await api.comments.getComments(page);
    const comments = helpers.responseToObj(response);

    dispatch(setComments(comments));

    return comments;
  };
}
