import React from 'react';
import Modal from '@mui/material/Modal';

const CustomMo = ({ open, handleClose, body }) => {
  
  return (
    <Modal open={open} onClose={handleClose}>
      {body}
    </Modal>
  )
};

export default CustomMo;




// trial modal
import React, { useState } from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from 'react-bootstrap';

const ModalContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;

`
const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    transform: translate(-50%,-50%);
    max-width:600px;
    width: 100%;
    background:#fff;
    height:300px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index:11111;
    overflow:auto;
    transition: 0.3ms fade;
`
const ModalHeader = styled.div`
background: rgba(0,0,0,0.4);
padding: 8px;
`
const ModalBody = styled.div`
    padding: 20px;
`

const Mymodal = () => {
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal)
    }

    const header = (
        <ModalHeader className='d_f j_c_s_b a_i_c'>
            <p>Modal</p>
            <p onClick={handleModal}>{<CloseIcon />}</p>
        </ModalHeader>
    )

     const body = (
        <ModalBody className='center'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eaque?</p>
            <Button className='m_top-20' >Clear cookies</Button>
        </ModalBody>
    )

    return (
        <>
            <ModalContainer>
                <Button onClick={handleModal}>OpenModal</Button>
                <ModalBox className={modal ? 'active-modal' : ''} >
                    {header}
                    {body}
                </ModalBox>
            </ModalContainer>
        </>
    )
}

export default Mymodal
