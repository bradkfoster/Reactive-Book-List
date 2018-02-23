import {combineReducers} from 'redux';
import booklistReducer from './booklistReducer';

export default combineReducers({
  booklist: booklistReducer
});