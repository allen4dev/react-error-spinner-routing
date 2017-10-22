import * as actionTypes from './actionTypes';

import api from './../../utils/api';
import helpers from './../../utils/helpers';

// Action creators
export function setPosts(posts) {
  return {
    type: actionTypes.SET_POSTS,
    payload: posts,
  };
}

// Async actions

export function fetchPosts(page = 1) {
  return async dispatch => {
    const response = await api.posts.getPosts(page);
    const posts = helpers.responseToObj(response);

    dispatch(setPosts(posts));

    return response;
  };
}
