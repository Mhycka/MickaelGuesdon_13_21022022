import { NOTIFICATIONS_SEND, NOTIFICATION_CLEAR } from "../actionsTypes"
import {v4 as uuid} from 'uuid'

/**
 * @const initialState
 */
const initialState = {
    notifications: [],
}

/**
 * Notifications reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function notifReducer(state = initialState, action) {
    switch(action.type) {
        case NOTIFICATIONS_SEND:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        ...action.payload,
                        id: uuid(),
                        createdAt: Date.now(),
                    }
                ]
            }

        case NOTIFICATION_CLEAR:
            const notifications = [...state.notifications]
            const notificationIndex = notifications.findIndex((notification) => notification.id !== action.payload.id)
            notifications.splice(notificationIndex, 1)
            return {
                ...state, 
                notifications
            }
        
        default:
            return state
    }
}