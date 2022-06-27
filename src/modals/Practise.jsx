import React, { useState } from 'react';
import CustomMo from './CustomMo';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    zIndex:99999,
    p: 4,
  };

const Practise = () => {
    const [open, setOpen] = useState(false);


    const body =(
            <>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Button variant='contained' onClick={()=>setOpen(false)} >Close</Button>
                </Box>
            </>
    )
    return (
        <>
        <div className='center'>
            <h2>Modal</h2>
            <Button variant='contained' onClick={()=>setOpen(true)} >Open</Button>
            <CustomMo open={open} handleClose={() => setOpen(false)} body={body} />
        </div>
        </>
    );
};
export default Practise;

// useCustomInputhook
// this is custom hook
import React, { useState } from 'react'

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reset = () => {
        setValue(initialValue)
    }
    const bind = {
        value: value,
        onChange: (e) => {
            setValue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput

//this is form
import { useState } from 'react'
import useInput from './useInput'
const MyForm = () => {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submit = () => {
        if (firstName && lastName) {
            alert(`${firstName} ${lastName}`)
        }
        resetFirstName()
        resetLastName()
    }
    return (
        <>
            <div className='my-4'>
                <span>First Name</span><input type='text'
                    {...bindFirstName}
                />
                <span>Last Name</span><input type='text'
                    {...bindLastName}
                />

            </div>
            <button onClick={submit}>Submit</button>
        </>
    )
}

export default MyForm
