import axios from 'axios'
import { LOGIN, REGISTER } from '../router/constant'

const API_URL = 'http://localhost:8000/api/users'

// ?Register userr

const register = async(userData) =>{
    debugger
    const response = await axios.post(API_URL + REGISTER, userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login

const login = async(userData) =>{
const response = await axios.post(API_URL + LOGIN , userData )
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// logout
 const logout = ()=>{
    localStorage.removeItem('user')
 }

const authService = {
    register,
    login,
    logout,
}

export default authService;