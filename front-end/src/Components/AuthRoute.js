import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { authorizationSelectors } from '../redux/Authorization/authorizationSelectors'

/**
 * Elements for authenticated state
 * @component
 * @param {Object} props
 * @param {Element} props.element Item to display when match is ok
 * @param {String} props.redirectTo Redirection address when match fall out
 * @param {Boolean} props.authenticated Authentication state to compare
 */


export default function RouteAuthorization({ element, redirectTo = '/', authenticated = true }) {
    const {isAuthenticated} = useSelector(authorizationSelectors)
    const location = useLocation()
    if (!(isAuthenticated === authenticated)) 
        return <Navigate to={redirectTo} state={{ from: location }} />;
    return element;
}


RouteAuthorization.propTypes = {
    element: propTypes.element.isRequired,
    redirectTo: propTypes.string,
    authenticated: propTypes.bool,
}