import React from 'react';
import '../todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';




    
const CustomModal = ({...props}) => {

    
    // const [showModal, setShowModal] = useState(false);



    // const modalsHide = () => {
    //     setShowModal(!showModal)
    //     modalsHide()
     props.modalsHide = () => {
        props.setShowModal(!props.showModal)

    }

    return (
        <>
            {
                props.showModal && (
                    <div className="modals_container">
                        <div className={props.animation?"modals_body active":"modals_body"}>
                            <div className='modal_header d-flex-1'>
                                <h3>Edit Todo</h3>
                                <h3 title='cancel' onClick={props.modalsHide}><FontAwesomeIcon icon={faTimes} /></h3>
                            </div>
                            <div className="input_field">
                                <input type="text" placeholder='Enter your task here.....'
                                value={props.inputValue} onChange={(e)=>props.setInputValue(e.target.value)}
                                />
                                <button onClick={props.handleUpdateTodo} type='submit' className='add_btn' ><FontAwesomeIcon icon={faEdit} /> Update </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default CustomModal;
