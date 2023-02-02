import axios from '../assets/api/api';
import { POLLS_LOADED_SUCCESS, POLLS_LOADED_FAIL } from '../actions/types';

const initialState = {
  polls: null,
};


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
