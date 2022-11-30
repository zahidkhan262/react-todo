import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GlobalContext } from '../context/GLobalContext';


const SignUp = () => {
    const { register, setRegister, initialValue } = useContext(GlobalContext);
    const [signUpInput, setSignUpInput] = useState(initialValue);

    const navigate = useNavigate()

    const signUp = (e) => {
        e.preventDefault();
        if (signUpInput.email && signUpInput.password) {
            setRegister([...register, signUpInput])
            setSignUpInput(initialValue)
            navigate("/signin")
        } else {
            toast.error("fill the field")
        }
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
                            {register.email}
                            <input type="text" placeholder='Enter your Email....'
                                name="email"
                                value={signUpInput.name} onChange={signUpHandle}
                            />
                        </div>
                        <div className="input_form">
                            {register.password}
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





// formik

// schema
// Yup.object({

//     test :Yup.string().min(2,'error msg').max(15,'error msg').required('field'),
// })
// input msg
// { errors.test && touched.test ?( <p className="form-error">{errors.test}</p>):null}

//                     value={values.test}
//                     onChange={handleChange}
                    
//                     onBlur={handleBlur}

//    const {values,errors,handleChange,touched, handleBlur,handleSubmit} = useFormik({
//         initialValues:initialValues,
//         validationSchema:SignUpSchema,
//         onSubmit:(values)=>{
//             console.log('value ',values)
//             localStorage.setItem("user", JSON.stringify(values));
//             navigate('/');
//         }
//     })


