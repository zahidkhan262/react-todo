import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import TodoTableList from './TodoTableList'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/action/todoAction';
import './Todo.css'
import TodoLogo from './TodoLogo'


const TodoView = () => {
    const initialInput = {
        taskname: "",
        username: ""
    }
    const dispatch = useDispatch();

    const [todoData, setTodoData] = useState(initialInput);

    // const [todoData, setTodoData] = useState({
    //     taskname: "",
    //     username: ""
    // })


    // for multiple input data
    const handleFormInput = (e) => {
        const { name, value } = e.target;
        setTodoData(() => {
            return {
                ...todoData,
                [name]: value
            }
        })
    }



    // add todo
    const addTodoData = () => {
        const { taskname, username } = todoData
        if (!taskname || !username) {
            return toast.error("Please fill the fields...")
        } else if (todoData.taskname.length < 4) {
            return toast.error("Task must be greater than 3 letter")
        } else if (todoData.username.length < 3) {
            return toast.error("Username must be greater than 3 letter")
        }
        dispatch(addTodo(todoData))
        setTodoData(initialInput)
        toast.success("Added Successfully")
    }
    // console.log(todoData, "todoData")





    // form
    const FORM = (
        <div className="form">
            <h2 className='mb-4'>CRUD</h2>

            <div className="input-field">
                <input
                    type="text"
                    placeholder='Task Name'
                    name='taskname'
                    value={todoData.taskname}
                    // onChange={(e) => setTodoData(e.target.value)}
                    autoComplete='off'
                    onChange={handleFormInput}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='User Name'
                    name='username'
                    value={todoData.username}
                    // onChange={(e) => setTodoData(e.target.value)}
                    autoComplete='off'
                    onChange={handleFormInput}
                />
            </div>

            <div className="form-btn mt-4">
                <Button
                    className='btn  col-md-6 col-xs-12'
                    onClick={() => addTodoData()}
                >
                    <TodoLogo />
                </Button>
            </div>
        </div >
    )
    return (
        <>
            <div className="fixHeigth">
                <Container>
                    <Row>
                        {/* <Col md={6}></Col> */}
                        <Col md={12}>
                            {FORM}
                        </Col>
                    </Row>
                    <TodoTableList />
                </Container>
            </div>
        </>
    )
}

export default TodoView
