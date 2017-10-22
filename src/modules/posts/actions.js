import * as actionTypes from './actionTypes';

import api from './../../utils/api';
import helpers from './../../utils/helpers';

// Action creators
export function setPosts(posts) {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
}

export function requestPosts() {
  return {
    type: actionTypes.FETCH_POSTS_REQUEST,
  };
}

export function requestFail() {
  return {
    type: actionTypes.FETCH_POSTS_FAILURE,
    payload: 'Something went wrong',
  };
}

// Async actions

export function fetchPosts() {
  return async (dispatch, getState) => {
    dispatch(requestPosts());

    const page = getState().posts.page;
    let response;

    try {
      response = await api.posts.getPosts(page);
    } catch (e) {
      return dispatch(requestFail());
    }

    const posts = helpers.responseToObj(response);
    dispatch(setPosts(posts));

    return response;
  };
}
