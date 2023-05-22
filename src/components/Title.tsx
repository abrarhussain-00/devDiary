import React from 'react';
import { Stack, Typography } from '@mui/material';

const Title = () => {
  return (
    <div style={{ textAlign: 'center', margin:'0 auto'}}>
      <Stack>
        <Typography variant="h4" component='h1' style={{ color: '', fontWeight: 'bold' }}>
          Tech Tenacity
        </Typography>
        <Typography variant="h5" style={{}}>
          Blogging Daily on the Path to Employment
        </Typography>
        <Typography style={{marginBottom:'10px'}}>By: Abrar Hussain</Typography>
      </Stack>
    </div>
  );
};

export default Title;
