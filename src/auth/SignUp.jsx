import { Container } from '@mui/material';
import React, { useState } from 'react';

const SignUp = () => {
    const [formInput, setFormInput] = useState("");

    const signIn = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Container>
                <div className="sign_form bg-info">
                    <form onSubmit={signIn}>
                        <h2 className="center">Register Form</h2>
                        <div className="input_form">
                            <input type="text" placeholder='Enter your Email....'
                                value={formInput} onChange={(e) => { setFormInput(e.target.value) }}
                            />
                        </div>
                        <div className="input_form">
                            <input type="text" placeholder='Enter your Password.....'
                                value={formInput} onChange={(e) => { setFormInput(e.target.value) }}
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
