import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './Authorization/authorizationReducer'
import notificationsReducer from './notif/notificationReducers'


/**
 * Conbine reducers
 */
const rootReducer = combineReducers({
    authReducer,
    notificationsReducer,
})


/**
 * Create store
 */
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),// Defered dispatch
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),// Chrome Redux plugin
    )
)
export default store