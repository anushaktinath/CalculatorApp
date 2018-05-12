import {
  OPERATION_SUCCESS,
  OPERATION
} from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case OPERATION_SUCCESS:
     return action.payload;
     case OPERATION:
     return action.payload;
     default:
     return state;
   }
};
