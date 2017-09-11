import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import pudoSavedAddresses from './pudoReducer';


const rootReducer = combineReducers({
  pudoSavedAddresses,
  ajaxCallsInProgress
});

export default rootReducer;
