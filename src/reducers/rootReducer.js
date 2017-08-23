import user from './user';
import game from './game';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user,
  game
});

export default rootReducer;
