import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});//combine all the reducers

export default rootReducer;
