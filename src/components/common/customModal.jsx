import React, { useState } from 'react';
import './modal.css'
import '../todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';


const CustomModal = () => {

    const [showModal, setShowModal] = useState(false);
    const modalsHide = () => {
        setShowModal(!showModal)
        modalsHide()
    }

    return (
        <>
            {
                showModal && (
                    <div className="modals_container">
                        <div className="modals_body">
                            <div className='modal_header d-flex-1'>
                                <h3>Edit Todo</h3>
                                <h3 title='cancel' onClick={modalsHide}><FontAwesomeIcon icon={faTimes} style={{ color: 'crimson' }} /></h3>
                            </div>
                            <div className="input_field">
                                <input type="text" placeholder='Enter your task here.....'
                                />
                                <button type='submit' className='add_btn' ><FontAwesomeIcon icon={faEdit} /> Edit</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default CustomModal;
