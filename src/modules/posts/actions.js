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

// Async actions

export function fetchPosts() {
  return async (dispatch, getState) => {
    dispatch(requestPosts());

    const page = getState().posts.page;
    const response = await api.posts.getPosts(page);
    const posts = helpers.responseToObj(response);

    dispatch(setPosts(posts));

    return response;
  };
}
