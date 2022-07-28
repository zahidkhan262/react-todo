import React from 'react'
import { Card } from 'react-bootstrap'
import Wrong from './wrong.gif'
const ErrorFound = () => {
    return (
        <>
            <div className="text-center">
                <Card.Img src={Wrong} alt="wrong" className='w-25 text-center' />
                <h2>Something went wrong....</h2>
            </div>
        </>
    )
}

export default ErrorFound