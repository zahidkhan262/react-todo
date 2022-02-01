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
