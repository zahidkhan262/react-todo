import React from 'react';
import { Box, Container } from '@mui/material';

const Home = () => {
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
          <h1 className='center'>This is home page</h1>
        </Box>
      </Container>
    </>
  )
};

export default Home;
