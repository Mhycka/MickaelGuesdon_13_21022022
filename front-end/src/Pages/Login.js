import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../Components/Icon'
import { authorizationLogin } from '../redux/Authorization/authorizationActions'
import { authorizationSelectors } from '../redux/Authorization/authorizationSelectors'
import { useNavigate } from "react-router-dom";




/**
 * Login page doc
 * @component
 */


export default function Login() {
    const [credentials, setCredentials] = useState({
        email: 'steve@rogers.com',
        password: 'password456',
        remember: false,
    })

    const {isAuthenticated, loading} = useSelector(authorizationSelectors)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuthenticated) navigate('/dashboard')
    }, [isAuthenticated, navigate])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authorizationLogin(credentials))
    }

    return (
        <main className="main main-dark">
            <section className="login">
                <div className="login-container">
                    <div className="form-header">
                        <div className="form-header-icon"><Icon name="user-circle" /></div>
                        <h1 className="form-header-title">Sign In</h1>
                    </div>
                    <form className="form-content" onSubmit={handleSubmit}>
                        <div className="form-wrapper">
                            <label htmlFor="email" className="form-label">Username</label>
                            <input 
                                type="text" 
                                id="email"
                                className="form-control"
                                value={credentials.email}
                                disabled={loading && 'disabled'}
                                onChange={e => setCredentials({...credentials, email: e.target.value})}
                            />
                        </div>
                        <div className="form-wrapper">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                type="password" 
                                id="password"
                                className="form-control"
                                value={credentials.password}
                                disabled={loading && 'disabled'}
                                onChange={e => setCredentials({...credentials, password: e.target.value})}
                            />
                        </div>
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                id="remember-me"
                                className="form-check-input"
                                onChange={e => setCredentials({...credentials, remember: e.target.checked})}
                                disabled={loading && 'disabled'}
                            />
                            <label htmlFor="remember-me" className="form-check-label">Remember me</label>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={loading && 'disabled'}
                        >Sign In</button>
                    </form>
                </div>
            </section>
      </main>
    )
}