// import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN } from './constant';

const ProtectRouting = ({ component: Component, ...rest }) => {
    const isAuth = useSelector(state => state.auth.user);
    console.log(isAuth)

    return (
        isAuth ? <Outlet /> : (<Navigate to={LOGIN} />)
    )

}

export default ProtectRouting