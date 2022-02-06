import { Card, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NotFound = () => {
  return (
  <>
  <Container>
      <Box>
          <Card>
              <h1 className='center'>Not found data....</h1>
          </Card>
      </Box>
  </Container>
  </>
    )
};

export default NotFound;
