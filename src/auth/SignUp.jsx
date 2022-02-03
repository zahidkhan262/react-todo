import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GlobalContext } from '../context/GLobalContext';
const SignUp = () => {


    const history=useNavigate();
    const { register, setRegister } = useContext(GlobalContext);

    const [signUpInput, setSignUpInput] = useState({ email: "", password: "" });

    const signUp = (e) => {
        e.preventDefault();
        setRegister([...register,signUpInput])
        // setSignUpInput({email:"",password:""})
        toast.success("Registered User")

        history("/signin")

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
                        
                            <input type="text" placeholder='Enter your Email....'
                                name="email"
                                value={signUpInput.name} onChange={signUpHandle}
                            />
                        </div>
                        <div className="input_form">
                         
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
