import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import TodoTableList from './TodoTableList'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action/todoAction';
import './Todo.css'
import TodoLogo from './TodoLogo'


const TodoView = () => {
    const dispatch = useDispatch();

    const [todoData, setTodoData] = useState({
        taskname: "",
        username: ""
    })

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

        if (!todoData) {
            return toast.error("Please enter task")
        } else if (todoData.taskname.length < 3) {
            return toast.error("Task must be greater than 2 letter")
        }
        dispatch(addTodo(todoData))
        setTodoData("")
        toast.success("Added Successfully")
    }
    console.log(todoData, "todoData")

    console.log(todoData.taskname, "task")
    console.log(todoData.username, "name")


    // form
    const FORM = (
        <div className="form">
            <h2 className='mb-4'>Todo</h2>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Enter your task...'
                    name='taskname'
                    value={todoData.taskname}
                    // onChange={(e) => setTodoData(e.target.value)}
                    onChange={handleFormInput}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Enter your task...'
                    name='username'
                    value={todoData.username}
                    // onChange={(e) => setTodoData(e.target.value)}
                    onChange={handleFormInput}
                />
            </div>

            <div className="form-btn mt-4">

                <Button
                    className='btn btn-primary col-md-8 col-xs-12'
                    variant='outline'
                    onClick={() => addTodoData()}
                >
                    <TodoLogo />
                </Button>
            </div>
        </div>
    )
    return (
        <>
            <Container className='fixHeigth'>
                <Row>
                    {/* <Col md={6}></Col> */}
                    <Col md={12}>
                        {FORM}
                    </Col>

                    <TodoTableList />

                </Row>
            </Container>
        </>
    )
}

export default TodoView
