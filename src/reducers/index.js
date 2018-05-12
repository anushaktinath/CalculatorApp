import { combineReducers } from 'redux';
import operationReducer from './operationReducer';

export default combineReducers({
  values: operationReducer,
});
