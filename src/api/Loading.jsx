import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

 function Loading() {
  return (
    <Box sx={{ width: '100%' }} className="active">
      <LinearProgress />
    </Box>
  );
}
export default Loading;
