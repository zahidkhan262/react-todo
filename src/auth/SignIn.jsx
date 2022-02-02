import { Container } from '@mui/material';
import React, { useState, useContext } from 'react';
import GlobalContext from '../context/GLobalContext'

const SignIn = () => {

    const {register} = useContext(GlobalContext)
    const [formInput, setFormInput] = useState("");
    console.log("register data signIn",register)

    const signIn = (e) => {
        e.preventDefault();
    }

    const signIpHandle=(e)=>{

        const {name, value}=e.target;
        setFormInput({...formInput, [name]:value})
    }

    return (
        <>
            <Container>
                <div className="sign_form">
                    <form onSubmit={signIn}>
                        <h2 className="center">Sign In Form</h2>
                        <div className="input_form">
                            <input type="text" placeholder='Enter your Email....'
                            type="email"
                            name="email"
                                value={formInput.name} onChange={signIpHandle}
                            />
                        </div>
                        <div className="input_form">
                            <input type="text" placeholder='Enter your Password.....'
                            name="password" type="password"
                                value={formInput.name} onChange={signIpHandle}
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
