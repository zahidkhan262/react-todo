import React, { useEffect, useState } from 'react'
import { Button, Col, Container, NavLink, Row, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LOGIN } from '../../router/constant';
import { useDispatch, useSelector } from 'react-redux'
// import { registerForm } from '../../redux/action/authAction';
import { register, reset } from '../../features/authSlice';
const Register = () => {
    const [registerInput, setRegisterInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const { firstname, lastname, email, password } = registerInput

    // const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {user, isLoading, isError, isSuccess, message} = useSelector((state)=> state.auth)


    useEffect(()=>{
        if(isError) {
            toast.error(message)
        }
        if(isSuccess) {
            toast.success("Register successfully")
            navigate(LOGIN)
        }
        dispatch(reset())
    },[user, isError, isLoading, isSuccess, message, navigate, dispatch])

    const handleRegister = (e) => {
        const { name, value } = e.target;
        setRegisterInput(() => {
            return {
                ...registerInput,
                [name]: value
            }
        })
    }
    // console.log(registerInput, "register")

    

    const registerForm = (e) => {
        e.preventDefault()
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!firstname || !lastname || !email || !password) {
            return toast.error("Please fill the field")
        } else if (firstname.length < 3) {
            toast.error("First name must be greater than 3")
        }
        else if (lastname.length < 3) {
            toast.error("Last name must be greater than 3")
        }
        else if (!regex.test(email)) {
            toast.error("Please use email format")
        }
        else if (password.length < 5) {
            toast.error("Password lenght must be greater than 5")
        }
        else {
            const userData = {
                firstname,
                lastname,
                email,
                password
            }
            dispatch(register(userData))
        }
    }


    if(isLoading){
        return <Spinner>Loading</Spinner>
    }


    const REGISTERFORM = (
        <form className="form" onSubmit={registerForm}>
            <h2 className='mb-4'>Register Form</h2>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='First Name'
                    name='firstname'
                    value={firstname}
                    autoComplete='off'
                    onChange={handleRegister}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Last Name'
                    name='lastname'
                    value={lastname}
                    autoComplete='off'
                    onChange={handleRegister}
                />
            </div>
            <div className="input-field">
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={email}
                    autoComplete='off'
                    onChange={handleRegister}
                />
            </div>
            <div className="input-field">
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleRegister}
                />
            </div>
            {/* <div className="input-field">
                <input
                    type="password"
                    placeholder='Confirm password'
                    name='cpassword'
                    value={cpassword}
                    onChange={handleRegister}
                />
            </div> */}

            <div className="form-btn mt-4">
                <Button
                    className='btn  col-md-6 col-xs-12'
                    type='submit'
                >
                    Register
                </Button>
            </div>
            <p className='mt-3 auth'>Have you already account? <NavLink onClick={() => navigate(LOGIN)} >Login</NavLink></p>
        </form >
    )

    return (
        <>
            <Container className='fixHeigth'>
                <Row>
                    {/* <Col md={6}></Col> */}
                    <Col md={12}>
                        {REGISTERFORM}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register