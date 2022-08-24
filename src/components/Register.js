import React, { useState } from 'react'
import { Button, Col, Container, NavLink, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { LOGIN } from '../../router/constant';
import { useDispatch } from 'react-redux'
import { registerForm } from '../../redux/action/authAction';

const Register = () => {

    const [registerInput, setRegisterInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: ""
    });
    // const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch()

    const navigate = useNavigate();

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

    const { firstname, lastname, email, password, cpassword } = registerInput

    const register = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!firstname || !lastname || !email || !password || !cpassword) {
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
        else if (cpassword.length < 5) {
            toast.error("Confirm password lenght must be greater than 5")
        }
        else if (password !== cpassword) {
            toast.error("password and confirm password must be same")
        }
        else {
            dispatch(registerForm(registerInput))
            toast.success("Register successfully")
            navigate(LOGIN)
            setRegisterInput({ firstname: "", lastname: "", email: "", password: "", cpassword: "" })
        }
    }




    const REGISTERFORM = (
        <div className="form">
            <h2 className='mb-4'>Register Form</h2>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='First Name'
                    name='firstname'
                    value={registerInput.firstname}
                    autoComplete='off'
                    onChange={handleRegister}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Last Name'
                    name='lastname'
                    value={registerInput.lastname}
                    autoComplete='off'
                    onChange={handleRegister}
                />
            </div>
            <div className="input-field">
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    value={registerInput.email}
                    autoComplete='off'
                    onChange={handleRegister}
                />
            </div>
            <div className="input-field">
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={registerInput.password}
                    onChange={handleRegister}
                />
            </div>
            <div className="input-field">
                <input
                    type="password"
                    placeholder='Confirm password'
                    name='cpassword'
                    value={registerInput.cpassword}
                    onChange={handleRegister}
                />
            </div>

            <div className="form-btn mt-4">
                <Button
                    className='btn  col-md-6 col-xs-12'
                    onClick={() => register()}
                >
                    Register
                </Button>
            </div>
            <p className='mt-3 auth'>Have you already account? <NavLink onClick={() => navigate(LOGIN)} >Login</NavLink></p>
        </div >
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