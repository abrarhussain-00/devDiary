import React from 'react';
import { Stack, Typography } from '@mui/material';

const Title = () => {
  return (
    <div style={{ textAlign: 'center', margin:'0 auto'}}>
      <Stack>
        <Typography variant="h4" component='h4' style={{ color: '', fontWeight: 'bold' }}>
          365 Day Challenge
        </Typography>
        <Typography variant="h5" style={{color:'gray', fontSize:'15px'}}>
          Blogging Daily on the Path to Employment
        </Typography>
        <Typography style={{marginBottom:'10px', fontFamily:"cursive"}}>Abrar Hussain</Typography>
      </Stack>
    </div>
  );
};

export default Title;
