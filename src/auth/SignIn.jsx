import { Container } from '@mui/material';
import { toast } from 'react-toastify';
import React, { useContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GLobalContext';


const SignIn = () => {



    const { register, setUser } = useContext(GlobalContext)
    const navigate = useNavigate();  

    const [formInput, setFormInput] = useState(()=>{
        const data=localStorage.getItem("task")
        return data ? JSON.parse(data):[]
    })



    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(formInput));
    }, [formInput])
    
    const signIn = (e) => {
        e.preventDefault();

        if (formInput.email && formInput.password) {
            register.filter((ele) => {
                if (ele.email === formInput.email && ele.password === formInput.password) {
                    setUser(true);
                    navigate("/")
                   
                    console.log(register)
                    toast.success("login successfully")
                } else {
                    toast.error("Data do not match")
                }
            })
        } else {
            toast.error("Input field required")

        }
    }

    const signInHandle = (e) => {

        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value })
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
                                value={formInput?.name} onChange={signInHandle}
                            />
                        </div>
                        <div className="input_form">

                            <input type="password" placeholder='Enter your Password.....'
                                name="password"
                                value={formInput?.name} onChange={signInHandle}
                            />
                        </div>
                        <div className="btn-1">
                            <button type='submit' className='add_btn'>Sign In</button>
                        </div>
                        <div className="center">
                            <span className='text'>If you'r new user please Sign up now </span>
                            <button className='btn info' onClick={() => { navigate("/signup") }}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
};

export default SignIn;
