import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authorizationSelectors } from '../redux/Authorization/authorizationSelectors'
import { authorizationLogout } from '../redux/Authorization/authorizationActions'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../Components/Icon'
import logoImg from '../Media/argentBankLogo.png'


/**
 * Header layout
 * @component 
 */


export default function Header() {
    const {isAuthenticated, user} = useSelector(authorizationSelectors)
    const dispatch = useDispatch()
    
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/" className="header-nav-logo">
                    <img className="header-nav-logo-image" src={logoImg} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <ul className="header-nav-menu">
                    {isAuthenticated && (<>
                        <NavLink to="/dashboard">
                            <li className="header-nav-menu-item">
                                <Icon name="user-circle" />
                                {user.firstName}
                            </li>
                        </NavLink>
                        <NavLink to="/" onClick={() => dispatch(authorizationLogout())}>
                            <li className="header-nav-menu-item">
                                <Icon name="sign-out" />
                                Sign Out
                            </li>
                        </NavLink>
                    </>)}
                    {!isAuthenticated && (<>
                        <NavLink to="/login">
                            <li className="header-nav-menu-item">
                                <Icon name="user-circle" />
                                Sign In
                            </li>
                        </NavLink>
                    </>)}
                </ul>
            </nav>
        </header>
      )
}