import React, { useState } from 'react'
import CustomModal from './common/customModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomeTable from '../table/customeTable';
import { TableCell } from '@mui/material';
const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [todo, setTodo] = useState([]);

    const [index, setIndex] = useState(null);
    const [showModal, setShowModal] = useState(false)
    const [animation, setAnimation] = useState(false)


  


    const columns = [
                {label:"todo"},
                {label:"Action",
                content:(index) => {return(
                        <TableCell>
                            <button  className='edit_btn' onClick={() => editTodo(index)}>Edit</button>
                            <button className='delete_btn' onClick={() => { deleteTodo(index) }}>Delete</button>
                        </TableCell>
                )}}
        ];


    // add todo button
    const addTodo = (e) => {
        e.preventDefault();
        if (!inputValue) {
            toast.error("Invalid Input")
        }
        else {
            let temp = todo;
            temp.push(inputValue)

            setTodo(temp)
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
        setIndex(index)
        console.log("index",index);
        setInputValue(todo[index])
        setShowModal(true)
        setAnimation(true)

    }
    const handleUpdateTodo = () => {
        let temp = todo;
        temp[index] = inputValue;
        console.log("temp",temp);
        setTodo(temp);
        setShowModal(false);
        setInputValue("")
        toast.success("Todo Updated")

    }
    const props = { inputValue, editTodo, showModal, setShowModal, setInputValue, handleUpdateTodo, animation }


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
                    {
                        todo ?
                                    <CustomeTable key={index} rows={todo} columns={columns} />
                                    
                                 
                        : <h3 className='center'>There is no <FontAwesomeIcon icon={faTimes} style={{ color: "crimson" }} /> Data..</h3>
                    }


                </div>
                <CustomModal {...props} />
            </div>


        </>
    );
}


// image uploasder
const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute"
          }}
        />
      </div>
      Click to upload Image
    </div>
  );

export default Todo;
