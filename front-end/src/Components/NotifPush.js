import React, { useCallback, useEffect } from 'react'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Icon from './Icon'


/**
 * NotifPush
 * @component 
 * @param {Object} props
 * @param {Object} props.NotifPush NotifPush informations
 * @param {Function} props.clear Call to clear NotifPush
 * @param {Number} props.timeout Time before to clear NotifPush
 */


export default function NotifPush({NotifPush, clear, timeout}) {
    const dispatch = useDispatch()

    const clearNotifPush = useCallback(() => {
        if (clear) dispatch(clear(NotifPush))
    }, [dispatch, clear, NotifPush])

    useEffect(() => {
        const hideTimer = timeout ? setTimeout(clearNotifPush, timeout) : false
        return () => {
            if(hideTimer) clearTimeout(hideTimer)
        }
    }, [clearNotifPush, timeout])

    return (
        <div className={`NotifPush ${NotifPush.type}`} onClick={clearNotifPush}>
            {NotifPush.icon && (
                <div className="NotifPush-icon">
                    <Icon name={NotifPush.icon}/>
                </div>
            )}
            <div className="content">
                {NotifPush.title && <div className="NotifPush-title">{NotifPush.title}</div>}
                {NotifPush.message && <div className="NotifPush-message">{NotifPush.message}</div>}
            </div>
        </div>
    )
}

NotifPush.propTypes = {
    NotifPush: propTypes.object.isRequired,
    clear: propTypes.func,
    timeout: propTypes.number,
}