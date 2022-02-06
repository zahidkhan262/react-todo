import { Container } from '@mui/material';
import { toast } from 'react-toastify';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {GlobalContext} from '../context/GLobalContext';


const SignIn = () => {


    const navigate=useNavigate();
    const {register,initialValue } = useContext(GlobalContext)

    const [formInput, setFormInput] = useState(initialValue);
    // console.log(register);
    const signIn = (e) => {
        e.preventDefault();
        let Data=register.find((data)=>{
            if(data.email===formInput.email && data.password===formInput.password){
                
                toast.success("Log In Successfully");
                navigate("/")
                return data;
            }else{
                toast.error("Input does not match")
            }
        })
        setFormInput([...register,Data]); 
        console.log("Data",Data);
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
                        <div className="center">
                        <span className='text'>If you'r new user please Sign up now </span>
                        <button className='btn info' onClick={()=>{navigate("/signup")}}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
};

export default SignIn;
