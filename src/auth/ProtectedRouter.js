import React,{useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { GlobalContext } from '../context/GLobalContext';
const ProtectedRouter = ({ component: Component, ...rest }) => {

    const {user} = useContext(GlobalContext);
    console.log(user)
  return (
 
     user ? <Outlet /> : <Navigate to="/signin" />
  
    );
};

export default ProtectedRouter; 
