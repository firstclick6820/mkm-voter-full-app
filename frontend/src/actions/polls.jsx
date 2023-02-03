import axios from '../assets/api/api';
import { POLL_LOADED_SUCCESS, POLL_LOADED_FAIL, POLLS_LOADED_SUCCESS, POLLS_LOADED_FAIL } from '../actions/types';

const initialState = {
  polls: null,
};



// Get All Polls
export const loadPolls = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/polls/all/');

    dispatch({
      type: POLLS_LOADED_SUCCESS,
      payload: res.data,
    });


  } catch (err) {
    const localPolls = JSON.parse(localStorage.getItem('polls'));

    if (localPolls) {
      dispatch({
        type: POLLS_LOADED_SUCCESS,
        payload: localPolls,
      });
    } else {
      dispatch({
        type: POLLS_LOADED_FAIL,
      });
    }
  }
};


// Get A Single Poll
export const load_a_poll = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`api/polls/${id}/`);

    dispatch({
      type: POLL_LOADED_SUCCESS,
      payload: res.data,
    });


  } catch (err) {
    
    dispatch({
      type: POLL_LOADED_FAIL,
    });
  }
};
