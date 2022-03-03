import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { authorizationSelectors } from '../redux/Authorization/authorizationSelectors'
import { authorizationUpdateProfil } from '../redux/Authorization/authorizationActions'

/**
 * Dashboard homepage doc
 * @component
 */


export default function Index() {
    const [ updateProfile, setUpdateProfile ] = useState(false)
    const [ updateProfileForm, setUpdateProfileForm ] = useState({firstName: '', lastName: ''})
    const { user } = useSelector(authorizationSelectors)
    const dispatch = useDispatch()

    const saveUpdateProfile = (e) => {
        e.preventDefault()
        dispatch(authorizationUpdateProfil(updateProfileForm))
        setUpdateProfile(false)
    }

    const cancelUpdateProfile = () => setUpdateProfile(false)

    const showUpdateProfile = () => {
        setUpdateProfileForm({
            firstName: user.firstName,
            lastName: user.lastName,
        })
        setUpdateProfile(true)
    }

    return (
        <main className="main main-dark">
            {!updateProfile ? (
                <div className="dashboard-header">
                    <h1>Welcome back</h1>
                    <h2>{user.firstName} {user.lastName}!</h2>
                    <button 
                        className="btn btn-primary"
                        onClick={showUpdateProfile}
                    >Edit Name</button>
                </div>
            ) : (
                <div className="dashboard-header">
                    <h1>Edit your profile information</h1>
                    <form onSubmit={saveUpdateProfile} className="dashboard-form">
                        <div className="dashboard-form-wrapper">
                            <input 
                                type="text" 
                                className="form-control"
                                value={updateProfileForm.firstName}
                                onChange={(e) => setUpdateProfileForm({...updateProfileForm, firstName: e.target.value})}
                            />
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                        <div className="dashboard-form-wrapper">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={updateProfileForm.lastName}
                                onChange={(e) => setUpdateProfileForm({...updateProfileForm, lastName: e.target.value})}
                            />
                            <button 
                                className="btn"
                                type="button" 
                                onClick={cancelUpdateProfile} 
                            >Cancel</button>
                        </div>
                    </form>
                </div>
            )}
            <h2 className="sr-only">Accounts</h2>
            <div className="dashboard-grid">
                <section className="account">
                    <div className="account-content">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-actions">
                        <button className="transaction-button btn btn-primary">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-actions">
                        <button className="transaction-button btn btn-primary">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-actions">
                        <button className="transaction-button btn btn-primary">View transactions</button>
                    </div>
                </section>
            </div>
        </main>
    )
}