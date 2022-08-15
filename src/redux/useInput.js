import React, { useState } from 'react'

const useInput = () => {
    const [formInputValue, setFormInputValue] = useState("")
    const [error, setError] = useState("");

    const handleFormInput = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;

        setFormInputValue(() => {
            return {
                ...formInputValue,
                [name]: value
            }
        })
    }
    return {
        formInputValue,
        error,
        setError,
        handleFormInput
    }

}
export default useInput;