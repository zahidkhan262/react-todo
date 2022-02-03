import { Container, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GLobalContext';
const SignUp = () => {


    const { register, setRegister } = useContext(GlobalContext);

    const [signUpInput, setSignUpInput] = useState({ email: "", password: "" });

    const signUp = (e) => {
        e.preventDefault();
        setRegister(signUpInput)
        setSignUpInput({email:"",password:""})  
    }

    const signUpHandle = (e) => {
        const { name, value } = e.target;
        setSignUpInput({ ...signUpInput, [name]: value })
    }


    return (
        <>
            <Container>
                <div className="sign_form bg-info">

                    <form onSubmit={signUp}>
                        <h2 className="center">Register Form</h2>
                        <div className="input_form">
                            <FormLabel>Email:{register.email}</FormLabel>
                            <input type="email" placeholder='Enter your Email....'
                                name="email"
                                value={signUpInput.name} onChange={signUpHandle}
                            />
                        </div>
                        <div className="input_form">
                            <FormLabel>Password:{register.password}</FormLabel>
                            <input type="password" placeholder='Enter your Password.....'
                                name="password"
                                value={signUpInput.name} onChange={signUpHandle}
                            />
                        </div>
                        <div className="btn-1">
                            <button type='submit' className='add_btn'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
};

export default SignUp;
