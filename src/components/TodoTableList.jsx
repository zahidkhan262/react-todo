import React, { useState } from 'react'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, Table, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteTodo, updateTodo } from '../../redux/action/todoAction';
import './Todo.css'
import noData from './nodata.gif'

const TodoTableList = () => {
    const dispatch = useDispatch();
    // useSelector
    const { todos } = useSelector((state) => state.todo)
    // console.log(todos, "redux")

    const tableColumn = ["USER", "TASK", "ACTION"];
    // view
    const [show, setShow] = useState(false);
    const [showSelectedData, setShowSelectedData] = useState("");
// delete
    const[showDelete, setShowDelete]= useState(false);
    // update
    const [showEdit, setShowEdit] = useState(false);
    const [update, setUpdate] = useState({
        taskname: "",
        username: ""
    });
    const [index, setIndex] = useState("")
    const handleClose = () => setShow(false);
    const handleCloseEdit = () => setShowEdit(false);

    // view todo READ
    const handleShowView = (data) => {
        setShowSelectedData(data)
        setShow(true)
    }


    // delete todo DELETE
    const removeTodo = (id) => {
        dispatch(deleteTodo(id))
        toast.success("Task Deleted.")
    }


    // open edit modal
    const handleShowEdit = (task) => {
        setShowEdit(true)
        setUpdate({ ...update, taskname: task.taskname, username: task.username })
    }

    // edit handle input
    const handleEditField = (e) => {
        const { name, value } = e.target;
        setUpdate({
            ...update,
            [name]: value
        })
    }

    // update todo UPDATE
    const updateTodoData = (e) => {
        if (!update.taskname || !update.username) {
            return toast.error("Please fill the field.")
        }
        dispatch(updateTodo(update, index))
        setShowEdit(false)
        toast.info("Task Updated.")
    }



    const THEAD = tableColumn.map((col, id) => {
        return (
            <React.Fragment key={id}>
                <th key={col.id}>{col}</th>
            </React.Fragment>
        )
    })

    const TBODY = todos?.map((task, id) => {
        const color = id % 2 === 0 ? "gray" : "black"
        return (
            <React.Fragment key={id}>
                <tr key={task}>
                    <td><span className='user-logo' style={{ color: color }} title={task.username}>{task.username.charAt(0).toUpperCase()}</span></td>
                    <td><p className='fs-5 mt-3 text-dark text-capitalize'>{task?.taskname}</p></td>
                    <td>
                        <Button className='btn btn-danger' onClick={() => removeTodo(id)}><FontAwesomeIcon icon={faTrash} /></Button>
                        <Button className='btn btn-success m-2' onClick={() => {
                            handleShowEdit(task)
                            setIndex(id)
                        }} ><FontAwesomeIcon icon={faEdit} /></Button>
                        <Button className='btn btn-primary' onClick={() => handleShowView(task)} ><FontAwesomeIcon icon={faEye} /></Button>
                    </td>
                </tr>
            </React.Fragment >
        )
    })

    const ViewModal = (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>View Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>{showSelectedData.taskname}</Modal.Body>
        </Modal>
    )

    const UpdateModal = (
        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Update Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder='Enter your task...'
                            name='taskname'
                            value={update.taskname}
                            onChange={handleEditField}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder='Enter your task...'
                            name='username'
                            value={update.username}
                            onChange={handleEditField}
                        />
                    </div>
                    <div className="form-btn mt-4">
                        <Button
                            className='btn btn-danger col-md-4'
                            variant='outline'
                            onClick={handleCloseEdit}
                        >
                            Cancel <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button
                            className='btn btn-primary col-md-4 mx-2'
                            variant='outline'
                            onClick={() => updateTodoData()}
                        >
                            Update <FontAwesomeIcon icon={faEdit} />
                        </Button>

                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
    return (
        <>
            <Container>
                {
                    todos.length ?
                        <Table striped bordered hover className='table-success text-center'>
                            <thead className='table-dark' >
                                <tr>
                                    {THEAD}
                                </tr>
                            </thead>
                            <tbody>
                                {TBODY}
                            </tbody>

                        </Table>
                        : <div className='no-data'><img src={noData} alt="no Data image picture" /></div>
                }

                {/* view modal  */}
                {ViewModal}

                {/* edit modal  */}
                {UpdateModal}
            </Container>
        </>
    )
}

export default TodoTableList
