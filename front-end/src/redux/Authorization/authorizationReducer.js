import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_USER, AUTH_UPDATE_USER } from "../actionsTypes"

/**
 * @const initialState
 */
const initialState = {
    isAuthenticated: false,
    user: {},
    token: '',
    loading: false,
}

/**
 * Auth reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case AUTH_LOGIN: 
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
            }

        case AUTH_LOGOUT: 
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                token: null,
            }

        case AUTH_SET_USER: 
            return {
                ...state,
                user: action.payload.user,
            }
            
        case AUTH_LOADING: 
            return {
                ...state,
                loading: action.payload,
            }

            case AUTH_UPDATE_USER: 
            return {
                ...state,
                user: action.payload.user,
            }
        
        default:
            return state
    }
}