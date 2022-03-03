/**
 * Auth selector
 * @param {Object} state
 * @returns {Function}
 */
 export const authorizationSelectors = (state) => ({...state.authReducer})