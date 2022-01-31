import React,{useState} from 'react';
import ModalsBody from './ModalsBody';

const Modal = () => {
    const [isShow, setIsShow] = useState(false)
  return (
      <>
      <ModalsBody isShow={isShow} setIsShow={setIsShow} />
      </>
  )
};

export default Modal;
