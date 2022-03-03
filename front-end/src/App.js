import './App.scss';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import Login from './Pages/Login';
import DashboardIndex from './Pages/Profil';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authorizationLoginAuto } from './redux/Authorization/authorizationActions';
import RouteAuthorization from './Components/AuthRoute';


export default function App() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) dispatch(authorizationLoginAuto(token))
    }, [dispatch])

    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/login" exact element={
                            <RouteAuthorization redirectTo="/dashboard" element={<Login />} authenticated={false} />
                        }/>
                        <Route path="/dashboard" exact element={
                            <RouteAuthorization redirectTo="/login" element={<DashboardIndex />} />
                        } />
                        <Route path="*" element={<Navigate to={'/'} />}/>
                    </Routes>
                </Layout>
            </Router>
        </>
    )
}