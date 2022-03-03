import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Notifications from './Notification'

/**
 * Layout files
 * @component
 */


export default function Layout({children}) {
    return (
        <>
            <Header />
            {children}
            <Notifications />
            <Footer />
        </>
    )
}