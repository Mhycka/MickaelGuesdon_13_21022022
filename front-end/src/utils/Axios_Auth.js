import axios from "axios"

/**
 * Set authorization token in axios header from back-end
 * @param {string} token
 * @return {void}
 */
export default function authorizationToken(token) {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete axios.defaults.headers.common['Authorization']
}