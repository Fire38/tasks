import {
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/authActions';


const initialState = {
    logged_in: false,
    authorizationProcess: false,
    error: null
}


export default function authReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN_BEGIN:
            return {
                ...state,
                authorizationProcess: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authorizationProcess: false,
                logged_in: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                authorizationProcess: false,
                error: action.payload.error
            }
        default:
            return state
    }
}