import React, { useState } from 'react'
import CustomModal from './common/CustomModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
const Todo = () => {

    const [inputValue, setInputValue] = useState("");

    const [todo, setTodo] = useState([]);


    // add todo button
    const addTodo = (e) => {
        e.preventDefault();
        if (!inputValue) {
            toast.error("Invalid Input")
        } else {
            todo.push({ task_name: inputValue, id: new Date().getTime().toString() })
            setTodo(todo)
            toast.success("Task Added")
            setInputValue("")
        }
    }

    // delete todo button
    const deleteTodo = (index) => {
        const newTodo = todo.filter((ele, i) => {
            return index !== i
        })
        setTodo(newTodo)

        console.log(newTodo)
    }

    // edit Todo by find method

    const editTodo = (index) => {
        toast.warning(`todo id: ${index}`)
    }


    return (
        <>
            <div className="container-1">
                <div className="form_box">
                    <form onSubmit={addTodo}>
                        <h2 className="center">Todo App</h2>
                        <div className="input_field">
                            <input type="text" placeholder='Enter your task here.....'
                                value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}
                            />
                            <button type='submit' className='add_btn'><FontAwesomeIcon icon={faPlus} /> Add</button>
                        </div>
                    </form>
                    <ul className="todo_list">
                        {
                            todo.length ? todo.map((item, index) => {
                                return (

                                    <li className='d-flex-1' key={index}>
                                        <p>  {item.task_name} </p>
                                        <span>
                                            <button className='edit_btn' onClick={() => editTodo(index)}>Edit</button>
                                            <button className='delete_btn' onClick={() => { deleteTodo(index) }}>Delete</button>
                                        </span>
                                    </li>
                                )
                            })
                                : <h3 className='center'>There is no <FontAwesomeIcon icon={faTimes} style={{ color: "crimson" }} /> Data..</h3>
                        }
                    </ul>
                </div>
                <CustomModal editTodo={editTodo} />
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default Todo;