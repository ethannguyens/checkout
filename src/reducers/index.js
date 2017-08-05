import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  ajaxCallsInProgress,
  form: reduxFormReducer
});

export default rootReducer;
