import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import './Form.css';
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const [showCPass, setShowCPass] = useState(false)
    const [formInputValue, setFormInputValue] = useState({
        fullname: "",
        email: "",
        password: "",
        cpassword: ""

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

    const registerForm = (e) => {
        e.preventDefault()
        // object destructuring
        const { fullname, email, password, cpassword } = formInputValue;

        if (fullname === "") {
            toast.error("please enter your fullname...")
        }
        else if (fullname.length < 5) {
            toast.error("please enter fullname at least 5 letter...")
        } else if (email === "") {
            toast.error("please enter your email...")
        } else if (!email.includes("@")) {
            toast.error("Please enter a valid email")
        } else if (password === "") {
            toast.error("please enter your password...")
        } else if (password.length < 6 && password) {
            toast.error("password must be 6 char")
        } else if (cpassword === "") {
            toast.error("please enter your confirm password...")
        } else if (cpassword.length < 6) {
            toast.error("password must be 6 char")
        } else if (password !== cpassword) {
            toast.error("password and confirm password not same!")
        } else {
            console.log("you'r successfully register")
            toast.success("you'r register successfully")
        }
    }

    const handleShowPass = () => {
        setShowPass((prevState) => !prevState)
    }
    const handleShowCPass = () => {
        setShowCPass((prevState) => !prevState)
    }

    return (
        <>
            <Container>
                <Row>
                    {/* <Col md={6}></Col> */}
                    <Col md={12}>
                        <div className="form">
                            <h2 className='mb-4'>Sign Up</h2>
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    name='fullname'
                                    value={formInputValue.name}
                                    onChange={handleFormInput}
                                />
                            </div>
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
                            <div className="input-field">
                                <input
                                    type={showCPass ? "text" : "password"}
                                    placeholder='Enter your confirm password'
                                    name='cpassword'
                                    value={formInputValue.name}
                                    onChange={handleFormInput}

                                />
                                {
                                    showCPass
                                        ?
                                        <FontAwesomeIcon icon={faLockOpen} className="pass-lock-icon" onClick={handleShowCPass} />
                                        :
                                        <FontAwesomeIcon icon={faLock} className="pass-lock-icon" onClick={handleShowCPass} />
                                }
                            </div>
                            <div className="form-btn mt-4">
                                <Button
                                    className='btn btn-primary col-md-8'
                                    variant='outline'
                                    onClick={registerForm}
                                >
                                    Register
                                </Button>
                            </div>
                            <div className="form-footer mt-3">
                                <p>Have you already account ? <NavLink to='/signin'>Login</NavLink> </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register