import axios from '../assets/api/api';


import { 
            POLLS_LOADED_SUCCESS, 
            POLLS_LOADED_FAIL, 
            POLL_LOADED_FAIL,
            POLL_LOADED_SUCCESS


} from '../actions/types';

const initialState = {
  polls: null,
  poll: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POLLS_LOADED_SUCCESS:
      localStorage.setItem('polls', JSON.stringify(payload));
      return {
        ...state,
        polls: payload,
      };

    case POLLS_LOADED_FAIL:
      return {
        ...state,
        polls: null,
      };

    case POLL_LOADED_SUCCESS: 
        return {
          ...state,
          poll: payload      
        }

    case POLL_LOADED_FAIL: 
        return {
          ...state,
          poll: null      
        }


    default:
      return state;
  }
}