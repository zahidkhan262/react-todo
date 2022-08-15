import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import './Form.css';
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const [formInputValue, setFormInputValue] = useState({
        fullname: "",
        email: "",
        password: "",
    })

    const handleFormInput = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;

        setFormInputValue(() => {
            return {
                ...formInputValue,
                [name]: value
            }
        })
    }

    // register fucntion

    const loginForm = (e) => {
        e.preventDefault()
        // object destructuring
        const { email, password } = formInputValue;

        if (email === "") {
            toast.error("please enter your email...")
        } else if (!email.includes("@")) {
            toast.error("Please enter a valid email")
        } else if (password === "") {
            toast.error("please enter your password...")
        } else if (password.length < 6) {
            toast.error("password must be 6 char")
        } else {
            console.log("you'r login successfully")
            toast.success("you'r login successfully")
        }
    }

    const handleShowPass = () => {
        setShowPass((prevState) => !prevState)
    }
    return (
        <>
            <Container>
                <Row>
                    {/* <Col md={6}></Col> */}
                    <Col md={12}>
                        <div className="form">
                            <h2 className='mb-4'>Sign In</h2>
                            <div className="input-field">
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    name='email'
                                    value={formInputValue.name}
                                    onChange={handleFormInput}
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder='Enter your password'
                                    name='password'
                                    value={formInputValue.name}
                                    onChange={handleFormInput}
                                />
                                {
                                    showPass
                                        ?
                                        <FontAwesomeIcon icon={faLockOpen} className="pass-lock-icon" onClick={handleShowPass} />
                                        :
                                        <FontAwesomeIcon icon={faLock} className="pass-lock-icon" onClick={handleShowPass} />
                                }
                            </div>

                            <div className="form-btn mt-4">
                                <Button
                                    className='btn btn-primary col-md-8'
                                    variant='outline'
                                    onClick={loginForm}
                                >
                                    Sign In
                                </Button>
                            </div>
                            <div className="form-footer mt-3">
                                <p>If you haven't account ? <NavLink to='/register'>Signup</NavLink> </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login