import { Container } from '@mui/material';
import React, { useContext, useState } from 'react';
import {GlobalContext} from '../context/GLobalContext';


const SignIn = () => {

    const {register} = useContext(GlobalContext)

    const [formInput, setFormInput] = useState({email:"",password:""});
    console.log(register);
    const signIn = (e) => {
        e.preventDefault();
        
    }

    const signInHandle=(e)=>{

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
                            name="email"
                                value={formInput.name} onChange={signInHandle}
                            />
                        </div>
                        <div className="input_form">
                            <input type="password" placeholder='Enter your Password.....'
                            name="password"
                                value={formInput.name} onChange={signInHandle}
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
