import {
        LOGIN_FAIL,
        LOAD_USER_SUCCESS,
        LOAD_USER_FAIL,
        LOGIN_SUCCESS,
        AUTHENTICATED_SUCCESS,
        AUTHENTICATED_FAIL,
        LOGGOUT,
        PASSWORD_RESET_CONFIRM_FAIL,
        PASSWORD_RESET_CONFIRM_SUCCESS,
        PASSWORD_RESET_FAIL,
        PASSWORD_RESET_SUCCESS,
        SIGNUP_FAIL, 
        SIGNUP_SUCCESS,
        ACTIVATION_FAIL, 
        ACTIVATION_SUCCESS
    } from '../actions/types';


const intialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: false,
    user: null
}



export default function(state= intialState, action) {
    const {type, payload} = action;


    switch(type) {
        // Authentication Success
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,

            }

        // Authentication Fail
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                    
            }
        // Login Success
        case LOGIN_SUCCESS: 
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }



        // Sign up Success
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
            }



        // Sing up fail, Login Fail, Loggout
        case SIGNUP_FAIL:
        case LOGIN_FAIL: 
        case LOGGOUT: 
            localStorage.removeItem('access');
            localStorage.removeItem('refresh')
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null,
                user:null,

            }

        // User Loaded Success
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }


        // User Loaded Fail
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null
                }

        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }

    

        default: 
            return state
            
            

    }
};