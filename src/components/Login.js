import React, { useEffect, useState } from 'react'
import { Button, Col, Container, NavLink, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { INDEX, REGISTER } from '../../router/constant'
import { login, reset } from '../../features/authSlice';
const Login = () => {

    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    });
    const { email, password } = loginInput

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)
    console.log("auths=>>>>>>>>>>>>>>>in loginn", user)


    useEffect(()=>{
        if(isError) {
            toast.error(message)
        }
        if(isSuccess) {
            toast.success("logged in successfully")
            navigate(INDEX)
        }
        dispatch(reset())
    },[user, isError, isLoading, isSuccess, message, navigate, dispatch])

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

   

    const onLogin = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
           }
           dispatch(login(userData))
    }

    if(isLoading){
        return <Spinner>Loading</Spinner>
    }


    const LOGINForm = (
        <form className="form" onSubmit={onLogin}>
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