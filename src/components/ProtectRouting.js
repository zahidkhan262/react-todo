// import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { REGISTER } from './constant';

const ProtectRouting = ({ children }) => {

    const user = useSelector(state => state.auth.user);
    console.log(user, "protected")
    if (!user) return <Navigate to={REGISTER} />
    return children

}

export default ProtectRouting