import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const FormValidation = () => {
    const initialValue = { Uname: "", email: "", password: "" }
    const [show, setShow] = useState(false);

    const [getFormData, setGetFormData] = useState([])

    const [formData, setFormData] = useState(initialValue)

    const { register, handleSubmit, formState: { errors } } = useForm();


    const signUpHandle = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log("data", data);
        setFormData(data);

        setGetFormData(formData)
    }
    console.log("getFormData", getFormData)
    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)} className="form">

                    <div className="input-field">
                        <input name='name' type="text" placeholder='Enter your name....'
                            value={formData.name} onChange={signUpHandle}
                            {...register("Uname", { required: true, maxLength: 16 })}
                        />
                        {errors.Uname && <p className='error'>Name must be less than 16 char...</p>}
                    </div>
                    <div className="input-field">
                        <input name='email' type="text" placeholder='Enter your email....'
                            value={formData.name} onChange={signUpHandle}
                            {...register("email",
                                {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                        />

                        {errors.email && <p className='error'>Email is not valid</p>}

                    </div>
                    <div className="input-field" onClick={() => { setShow(!show) }}>
                        <input name='password' type={!show ? "text" : "password"} placeholder='Enter your password....'
                            value={formData.name} onChange={signUpHandle}
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                            })}
                        />
                        {errors.password && <p className='error'>Password must be AlphaNumeric</p>}
                    </div>
                    <div className="btn">
                        <button className='btn btn-primary' type='submit'>Sign Up</button>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default FormValidation