import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FormLabel, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { editPost } from '../../redux/action/postAction'
import { POST } from '../../router/constant'
const EditPost = () => {

    const [editPostInput, setEditPostInput] = useState({
        fullname: "",
        designation: "",
        companyName: "",
        companyAddress: "",
        imgUrl: ""
    });
    const { posts } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        posts.find((p, i) => {
            if (i === parseInt(id)) {
                setEditPostInput({ ...editPostInput, fullname: p.fullname, designation: p.designation, companyName: p.companyName, companyAddress: p.companyAddress })
                console.log(p, "uniq data")
            }
        })
    }, [id]);


    // handle post input
    const handlePostInput = (e) => {
        const { name, value } = e.target
        setEditPostInput(() => {
            return {
                ...editPostInput,
                [name]: value
            }
        })
    }


    const updatePost = () => {
        dispatch(editPost(editPostInput, id))
        navigate(POST)
    }

    const FORM = (
        <div className="form">
            <h2 className='mb-4'>Create Post</h2>
            <FormLabel htmlFor='upload'>
                <FontAwesomeIcon icon={faCloudArrowUp} className='fs-1 text-primary' />
                <input type="file" value={editPostInput.imgUrl} onChange={handlePostInput} id='upload' />
                <p className='mt-1 text-secondary'>Upload Post</p>
            </FormLabel>

            <div className="input-field">
                <input
                    type="text"
                    placeholder='Full Name'
                    name='fullname'
                    value={editPostInput.fullname}
                    autoComplete='off'
                    onChange={handlePostInput}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Designation'
                    name='designation'
                    value={editPostInput.designation}
                    autoComplete='off'
                    onChange={handlePostInput}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Company Name'
                    name='companyName'
                    value={editPostInput.companyName}
                    autoComplete='off'
                    onChange={handlePostInput}
                />
            </div>
            <div className="input-field">
                <input
                    type="text"
                    placeholder='Company Address'
                    name='companyAddress'
                    value={editPostInput.companyAddress}
                    autoComplete='off'
                    onChange={handlePostInput}
                />
            </div>

            <div className="form-btn mt-4">
                <Button
                    className='btn  col-md-6 col-xs-12'
                    onClick={() => updatePost()}
                >
                    UPDATE POST
                </Button>
            </div>
        </div >
    )

    return (
        <>
            <Container className='fixHeigth'>
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

export default EditPost