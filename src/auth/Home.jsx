import React from 'react';
import { Box, Container } from '@mui/material';
import { useAuth } from '../context/GLobalContext';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const auth=useAuth()
  const navigate=useNavigate()

  const handleLogout=()=>{
    auth.logout()
    navigate("/signup")
  }
  return (
    <>
      <Container style={{margin:'20px auto', width: 300,}}>

        <Box
          sx={{
            width: 300,
            height: 300,
            color:'white',
            backgroundColor: 'primary',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <h1 className='center'>Welcome {auth.user} home page</h1>
          <button onClick={handleLogout}>Logout</button>
        </Box>
      </Container>
    </>
  )
};

export default Home;
