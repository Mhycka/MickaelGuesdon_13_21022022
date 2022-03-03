import axios from "axios"
import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_USER, AUTH_UPDATE_USER } from "../actionsTypes"
import { notificationPush } from '../notif/notificationActions'
import authorizationToken from "../../utils/Axios_Auth"

/**
 * Logout
 * @returns {Function} 
 */
export const authorizationLogout = () => async dispatch => {
    localStorage.removeItem('token')
    dispatch(notificationPush({ icon: "unlink", type: "success", message: "You are disconnected" }))
    dispatch({ type: AUTH_LOGOUT })
}


/**
 * Login
 * @param {object} credentials
 * @param {String} credentials.email
 * @param {String} credentials.password
 * @param {Boolean} credentials.remember
 * @returns {Function} 
 */
export const authorizationLogin = credentials => async dispatch => {
    try {
        dispatch({ type: AUTH_LOADING, payload: true })
        const responseLogin = await axios.post('/user/login', credentials)
        const token = responseLogin.data.body.token
        if (credentials.remember) localStorage.setItem('token', token)
        else localStorage.removeItem('token')
        authorizationToken(token)
        dispatch({ type: AUTH_LOADING, payload: false })
        dispatch(notificationPush({ icon: "link", type: "success", message: "You are connected" }))
        dispatch({ type: AUTH_LOGIN, payload: {token} })
        const responseProfile = await axios.post('/user/profile')
        const user = responseProfile.data.body
        dispatch({ type: AUTH_SET_USER, payload: {user} })
    } catch(error) {console.log(error)
        dispatch({ type: AUTH_LOADING, payload: false })
        if(error.response.status >= 500)
            return dispatch(notificationPush({ icon: "exclamation-triangle", type: "danger", message: "Server error retry later" }))
        if(error.response.status > 400)
            return dispatch(notificationPush({ icon: "exclamation-triangle", type: "danger", message: "Server connection lost" }))
        if(error.response.status === 400)
            return dispatch(notificationPush({ icon: "exclamation-triangle", type: "danger", message: "Invalid Email or password" }))
    }
}



/**
 * Auto login
 * @param {String} token
 * @returns {Function} 
 */
export const authorizationLoginAuto = token => async dispatch => {
    try {
        authorizationToken(token)
        dispatch({ type: AUTH_LOGIN, payload: {token} })
        const response = await axios.post('/user/profile')
        const user = response.data.body
        dispatch({ type: AUTH_SET_USER, payload: {user} })
    } catch(error) {
        if(error.response.status >= 500)
            return dispatch(notificationPush({ icon: "exclamation-triangle", type: "danger", message: "Server error retry later" }))
        if(error.response.status >= 400)
            return dispatch(notificationPush({ icon: "exclamation-triangle", type: "danger", message: "Server connection lost" }))
    }
}



/**
 * Update profile information
 * @param {object} formData
 * @param {String} formData.firstName
 * @param {String} formData.lastName
 * @returns {Function} 
 */
export const authorizationUpdateProfil = formData => async dispatch => {
    try {
        const response = await axios.put('/user/profile', formData)
        const user = response.data.body
        dispatch({ type: AUTH_UPDATE_USER, payload: {user} })
        dispatch(notificationPush({ icon: "address-card", type: "success", message: response.data.message }))
    } catch (error) {
        if(error.response.status >= 500)
            return dispatch(notificationPush({ icon: "exclamation-triangle", type: "danger", message: "Server error retry later" }))
        if(error.response.status >= 400)
            return dispatch(notificationPush({ icon: "exclamation-triangle", type: "danger", message: "Server connection lost" }))
    }
}
