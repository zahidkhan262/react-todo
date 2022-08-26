import React, { useState } from 'react'
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { loginForm } from '../../redux/action/authAction'
import { loadState } from '../../redux/localStorage'
import { INDEX, REGISTER } from '../../router/constant'

const Login = () => {

    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userAuth)

    const user = loadState().auth
    console.log(user, "<=================localstorage", "===================redux", userData)
    const handleLogin = (e) => {
        const { name, value } = e.target;
        setLoginInput(() => {
            return {
                ...loginInput,
                [name]: value
            }
        })
    }
    // console.log(loginInput, "login")

    const { email, password } = loginInput

    const login = (e) => {
        e.preventDefault()
        const isUser = user?.find((user) => user.email === email && user.password === password)
        localStorage.setItem('userrr=>>>>', JSON.stringify(isUser))
        if (!isUser) {
            return toast.error("Invalid Email and Password")
        }
        dispatch(loginForm(isUser))
        toast.success("Logged in")
        setLoginInput({ email: "", password: "" })
        navigate(INDEX)
    }

    const LOGINForm = (
        <form className="form" onSubmit={login}>
            <h2 className='mb-4'>Login Form</h2>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={loginInput.email}
                    autoComplete='off'
                    onChange={handleLogin}
                />
            </div>
            <div className="input-field">
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={loginInput.password}
                    onChange={handleLogin}
                />
            </div>
            <div className="form-btn mt-4">
                <Button
                    className='btn  col-md-6 col-xs-12'
                    type='submit'
                >
                    Login
                </Button>
            </div>
            <p className='mt-3 auth'>Are you new ? Register now <NavLink onClick={() => navigate(REGISTER)} >Register</NavLink></p>
        </form >
    )

    return (
        <>
            <Container className='fixHeigth'>
                <Row>
                    {/* <Col md={6}></Col> */}
                    <Col md={12}>
                        {LOGINForm}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login
