import { combineReducers } from 'redux';
import logReducer from './logReducer';
import gameStateReducer from './gameStateReducer';

export default combineReducers({
  logReducer,
  gameStateReducer,
});
