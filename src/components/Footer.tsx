import React from 'react';
import { Box, Typography } from '@mui/material';
import SocialMediaIcons from '../assets/SocialMediaIcons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ededed', paddingTop: '2.5rem', paddingBottom: '1.5rem' }}>
      <Box sx={{ width: '90%', margin: '0 auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <SocialMediaIcons />
          <Typography sx={{ fontFamily: 'Playfair Display', fontSize: '14px', color: 'black' }}>
            ©2023 Abrar | Blog.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
