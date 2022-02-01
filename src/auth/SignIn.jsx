import { Container } from '@mui/material';
import React, { useState } from 'react';

const SignIn = () => {
    const [formInput, setFormInput] = useState("");

    const signIn = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Container>
                <div className="sign_form">
                    <form onSubmit={signIn}>
                        <h2 className="center">Sign In Form</h2>
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
                        <button type='submit' className='add_btn'>Sign In</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
};

export default SignIn;
