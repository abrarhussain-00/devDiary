import React from 'react';
import { Stack, Typography } from '@mui/material';

const Title = () => {
  return (
    <div style={{ textAlign: 'left', marginLeft:'5vh' }}>
      <Stack>
        <Typography variant="h3" style={{ color: '', fontWeight: 'bold' }}>
          Tech Tenacity
        </Typography>
        <Typography variant="h5" style={{}}>
          Blogging Daily on the Path to Employment
        </Typography>
        <Typography>By Abrar Hussain</Typography>
      </Stack>
    </div>
  );
};

export default Title;
