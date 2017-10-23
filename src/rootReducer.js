import { combineReducers } from 'redux';

import posts from './modules/posts';
import users from './modules/users';
import comments from './modules/comments';

const rootReducer = combineReducers({
  [posts.constants.NAME]: posts.reducer,
  [users.constants.NAME]: users.reducer,
  [comments.constants.NAME]: comments.reducer,
});

export default rootReducer;
