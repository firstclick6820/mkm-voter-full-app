import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    USER_PROFILE_LOADED_SUCCES,
    USER_PROFILE_LOADED_FAIL,

    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,

    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,

    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    
    ACTIVATION_FAIL,
    ACTIVATION_SUCCESS,
    
    LOGGOUT,

    ERROR_MESSAGE_SUCCESS,
    ERROR_MESSAGE_FAIL

    


} from '../actions/types';


import axios from '../assets/api/api';


// Authentication
export const checkAuthenticated = () =>async dispatch => {
    if(localStorage.getItem('access')){
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
        const body = JSON.stringify({token: localStorage.getItem('access')});

        try {
            const res = await axios.post('/auth/jwt/verify/', body, config)

            if(res.data.code !== 'token_not_valid')
            {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                })
            }
            else 
            {
                dispatch({
                    type: AUTHENTICATED_FAIL
                })

            }
        }
        catch(err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            })
        }
    }
    else {
        dispatch({
            type: AUTHENTICATED_FAIL
        })
    }
};






// Load User
export const load_user = () => async dispatch => {
    const token = localStorage.getItem('access')

    if(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            },
        }
  
          
        try {
            const res = await axios.get('/auth/users/me/', config)
          
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: res.data,
                
            });
       
          
        }
        catch(err){
            dispatch({
                type: LOAD_USER_FAIL,

            });
        }
    }
    else {
        dispatch({
            type: LOAD_USER_FAIL,

        })
    };
        
};


export const load_user_profile = (id) => async (dispatch) => {

   
        try {
            const res = await axios.get(`api/users/profile/${id}/`)
          
            if(res.data.success) {
                dispatch({
                    type: USER_PROFILE_LOADED_SUCCES,
                    payload: res.data.data,
                    
                });
            }else {
                dispatch({
                    type: USER_PROFILE_LOADED_FAIL,
                    
                });
            }
            
          
        }
        catch(err){
            dispatch({
                type: USER_PROFILE_LOADED_FAIL,

            });
          
        }
    
   
}





// Login Funcation
export const login = (email, password) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
    };
  
    const body = JSON.stringify({ email, password });
  
    try {
      const res = await axios.post('auth/jwt/create/', body, config);
  
      if (res.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        dispatch(load_user());
        return true;
      } else {
        dispatch({ type: LOGIN_FAIL });
        return false;
      }
    } catch (err) {
      dispatch({ type: LOGIN_FAIL });
      return false;
    }
  };
  




// Sign Up
export const signup = (account_type, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ account_type, email, password, re_password });
    try {
        const res = await axios.post('/auth/users/', body, config);
        
        if (res.status === 201 ){
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data
            });
            return true;
        }
        else {
            dispatch({
                type: SIGNUP_FAIL
            })
            return false;
        }
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
        return false;
    }
};

// Verify 
export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    try {
        await axios.post('/auth/users/activation/', body, config);

        dispatch({
            type: ACTIVATION_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};




// Loggout 
export const loggout = () =>  dispatch => {
    dispatch({
        type: LOGGOUT
    })
}




// Password Reset
export const reset_password = (email) =>  async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    };



    const body = JSON.stringify({email})
    try {
        const res = await axios.post('/auth/users/reset_password/', body, config);

        if(res.status === 204){
            dispatch({type: PASSWORD_RESET_SUCCESS});
            return true;

        }else {
            dispatch({type: PASSWORD_RESET_FAIL});
            return false;
        }

    }
    catch(err) {

        dispatch({type:PASSWORD_RESET_FAIL});
        return false;

    };
}


// Password Reset Confirm
export const reset_password_confirm = (uid, token, new_password, re_new_password) =>  async dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    };



    const body = JSON.stringify({uid, token, new_password, re_new_password})

    try {
        const res = await axios.post('/auth/users/reset_password_confirm/', body, config);


        if(res.status === 204){
            dispatch({type: PASSWORD_RESET_CONFIRM_SUCCESS});
            return true;

        }else {
            dispatch({type: PASSWORD_RESET_CONFIRM_FAIL});
            return false;
        }



    }
    catch(err) {
        dispatch({type: PASSWORD_RESET_CONFIRM_FAIL});
        return false;
    };
}