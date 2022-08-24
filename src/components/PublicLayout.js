import React from 'react'
import { Route } from 'react-router'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { LOGIN, REGISTER } from './constant'

const PublicLayout = () => {
    return (
        <>
            <Route path={REGISTER} element={<Register />} />
            <Route path={LOGIN} element={<Login />} />
        </>
    )
}

export default PublicLayout