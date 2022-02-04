import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { GlobalContext ,useAuth} from '../context/GLobalContext';
const SignUp = () => {

    const { register, setRegister,user ,initialValue} = useContext(GlobalContext);

    const [signUpInput, setSignUpInput] = useState(initialValue);
   const auth= useAuth()
   const navigate=useNavigate()

    const signUp = (e) => {
        e.preventDefault();
        

        auth.login(user)
        navigate("/")

        setRegister([...register,signUpInput])

        setSignUpInput(initialValue)
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
