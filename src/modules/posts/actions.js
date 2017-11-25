import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

import api from './../../utils/api';

export const setPosts = createAction(actionTypes.FETCH_POSTS_SUCCESS);

// export function requestPosts() {
//   return {
//     type: actionTypes.FETCH_POSTS_REQUEST,
//   };
// }

// export function requestFail() {
//   return {
//     type: actionTypes.FETCH_POSTS_FAILURE,
//     payload: 'Something went wrong',
//   };
// }

export const fetchPosts = createAction(
  'API',
  () => ({ success: setPosts }),
  () => ({ apiEndpoint: api.posts.getPosts, filter: 'posts' })
);
