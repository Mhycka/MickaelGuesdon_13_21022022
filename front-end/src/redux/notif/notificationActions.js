import { NOTIFICATIONS_SEND, NOTIFICATION_CLEAR } from "../actionsTypes"



/**
 * Push a notification
 * @param {Object} notification
 * @returns {Object}
 */
export const notificationPush = (notification) => {
    return { type: NOTIFICATIONS_SEND, payload: notification }
}


/**
 * Clear a notification
 * @param {Object} notification
 * @returns {Object}
 */
export const removeNotification = (notification) => {
    return { type: NOTIFICATION_CLEAR, payload: notification }
}