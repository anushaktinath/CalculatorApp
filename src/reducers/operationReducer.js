import {
  OPERATION_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case OPERATION_SUCCESS:
     return action.payload;
     default:
     return state;
   }
};
