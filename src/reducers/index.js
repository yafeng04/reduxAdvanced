import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});//combine all the reducers

export default rootReducer;
