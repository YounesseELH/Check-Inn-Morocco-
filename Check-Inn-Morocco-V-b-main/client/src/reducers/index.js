import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import restaus from './restaus';

export const reducers = combineReducers({ posts, auth, restaus });
