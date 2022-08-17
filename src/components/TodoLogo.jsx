import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Todo.css'
const TodoLogo = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="todo-logo d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faPlus} className='plus-icon' />
                </div>
            </div>

        </>
    )
}

export default TodoLogo