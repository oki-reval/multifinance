import {combineReducers} from 'redux';
import initApps from './initApps';

const appReducer = combineReducers({
  initApps,
});

export default appReducer;
