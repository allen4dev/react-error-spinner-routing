import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

import api from './../../utils/api';

// Action creators
export const setComments = createAction(actionTypes.FETCH_COMMENTS_SUCCESS);

export const fetchComments = createAction(
  'API',
  () => ({ success: setComments }),
  () => ({
    apiEndpoint: api.comments.getComments,
    filter: 'comments',
  })
);
