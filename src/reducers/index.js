import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import pudo from './pudoReducer';


const rootReducer = combineReducers({
  pudo,
  ajaxCallsInProgress
});

export default rootReducer;
