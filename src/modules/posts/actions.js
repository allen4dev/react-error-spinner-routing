import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

import api from './../../utils/api';

export const setPosts = createAction(actionTypes.FETCH_POSTS_SUCCESS);

export const fetchPosts = createAction(
  'API',
  () => ({ success: setPosts }),
  () => ({ apiEndpoint: api.posts.getPosts, filter: 'posts' })
);
