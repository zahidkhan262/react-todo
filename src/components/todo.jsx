import React, { useState } from 'react'
import CustomModal from './common/CustomModal';
import './todo.css';
const Todo = () => {

    const [inputValue, setInputValue] = useState("");

    const [todo, setTodo] = useState([]);


    // add todo button
    const addTodo = (e) => {
        e.preventDefault();
        if (!inputValue) {
            alert("invalid input")
        } else {

            todo.push({ task_name: inputValue, id: new Date().getTime().toString() })
            setTodo(todo)
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
                            <button type='submit' className='add_btn'>Add</button>
                        </div>
                    </form>
                    <ul className="todo_list">

                        {
                            todo.length ? todo.map((item, index) => {
                                return (

                                    <li className='d-flex-1' key={index}>
                                        <p>  {item.task_name} </p>
                                        <span>
                                            <button className='edit_btn'>Edit</button>
                                            <button className='delete_btn' onClick={() => { deleteTodo(index) }}>Delete</button>
                                        </span>
                                    </li>

                                )
                            })
                                : <h3 className='center'>There is no Data..</h3>
                        }
                    </ul>

                </div>
                <CustomModal />
            </div>
        </>
    );
}

export default Todo;