import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import './modal.css'
const ModalsBody = ({isShow,setIsShow}) => {

    const handleShow=()=>{
        setIsShow(!isShow)
    }

    return (
        <>
        <div className="center">
            
        <Button variant='contained' onClick={handleShow}>Open Modal</Button>
        </div>
        {
            isShow?
        
            <div className="modal">  
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Modal
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            <Button variant='contained' onClick={handleShow}>Close</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            : null}
        </>
    )
};

export default ModalsBody;
