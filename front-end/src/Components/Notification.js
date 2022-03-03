import React from 'react'
import { useSelector } from 'react-redux'
import { notifSelector } from '../redux/notif/notificationSelectors'
import { removeNotification } from '../redux/notif/notificationActions'
import NotifPush from '../Components/NotifPush'

/**
 * Notifications
 * Show notifications from state result
 * @component
 */


export default function Notifications() {
    const {notifications} = useSelector(notifSelector)

    return notifications ? (
        <div className="NotifPushs">
            {notifications.map((notification) => (
                <NotifPush 
                    key={notification.id} 
                    NotifPush={notification} 
                    clear={removeNotification} 
                    timeout={3000} 
                />
            ))}
        </div>
    ) : (<></>)
}