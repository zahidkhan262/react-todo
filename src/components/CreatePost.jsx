import React from 'react'
import { useState } from 'react'
import { Button, Col, Container, FormLabel, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/action/postAction'
import TodoLogo from '../todo/TodoLogo'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
// import '../todo/Todo.css'
// EZhMVbtHUT44VuGS
const CreatePost = () => {

    const [postInput, setPostInput] = useState({
        fullname: "",
        designation: "",
        companyName: "",
        companyAddress: ""
    })
    const [uploadPost, setUploadPost] = useState("")
    // console.log(uploadPost, "-")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { state } = useLocation()
    // console.log(state, 'state')

    // handle post input
    const handlePostInput = (e) => {
        const { name, value } = e.target
        setPostInput(() => {
            return {
                ...postInput,
                imgUrl: uploadPost,
                [name]: value
            }
        })
    }

    // img upload funtion
    const uploadImage = (e) => {
        setUploadPost(URL.createObjectURL(e.target.files[0]))
    }


    // submit post 
    const createPost = () => {
        const { fullname, designation, companyName, companyAddress } = postInput

        if (!fullname || !designation || !companyName || !companyAddress) return toast.error("Please fill the fields...")

        if (fullname.length < 3 || designation.length < 3 || companyName.length < 3 || companyAddress.length < 3) return toast.error("Input must be greater than 3 letters")

        dispatch(addPost(postInput))

        if (postInput) {
            navigate('/post')
            toast.success("Post created..")
        }
        setPostInput({
            fullname: "", designation: "", companyName: "", companyAddress: ""
        })
    }


    // post form

    const FORM = (
        <div className="form">

            <h2 className='mb-4'>Create Post</h2>
            <FormLabel htmlFor='upload'>
                <FontAwesomeIcon icon={faCloudArrowUp} className='fs-1 text-primary' />
                <input type="file" onChange={uploadImage} id='upload' />
                <p className='mt-1 text-secondary'>Upload Post</p>
            </FormLabel>

            <div className="input-field">
                <input
                    type="text"
                    placeholder='Full Name'
                    name='fullname'
                    value={fullname}
                    autoComplete='off'
                    onChange={handlePostInput}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Designation'
                    name='designation'
                    value={designation}
                    autoComplete='off'
                    onChange={handlePostInput}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Company Name'
                    name='companyName'
                    value={companyName}
                    autoComplete='off'
                    onChange={handlePostInput}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Company Address'
                    name='companyAddress'
                    value={companyAddress}
                    autoComplete='off'
                    onChange={handlePostInput}
                />
            </div>

            <div className="form-btn mt-4">
                <Button
                    className='btn  col-md-6 col-xs-12'
                    onClick={() => createPost()}
                >
                    <TodoLogo />
                </Button>
            </div>
        </div >
    )

    return (
        <>
            <Container>
                <Row>
                    {/* <Col md={6}></Col> */}
                    <Col md={12}>
                        {FORM}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreatePost
