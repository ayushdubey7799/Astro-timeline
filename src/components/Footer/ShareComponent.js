import * as React from 'react';
import { FacebookIcon,
         TwitterIcon,
          InstapaperIcon,
        EmailIcon,
         PinterestIcon,
        } from 'react-share';
import Box from '@mui/material/Box';
import './style.css';

const style = {  
  display: "flex",
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '0.1rem',
  width: '50%',
  margin: '30px 20px',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '1rem',
  boxShadow: 20,
  p: 4,
};

export default function ShareComponent() {
  

  return (
    
        <Box sx={style}>
         <a
           href='https://facebook.com/academy'>
            <FacebookIcon size={40} round={true} />
          </a>
          <a
           href='https://crypto-track-info.netlify.app/'>
            <PinterestIcon size={40} round={true} />
          </a>
          <a
           href='https://crypto-track-info.netlify.app/'>
            <InstapaperIcon size={40} round={true} />
          </a>
          <a
           href='https://crypto-track-info.netlify.app/'>
            <EmailIcon size={40} round={true} />
          </a>
          <a
           href='https://twitter.com/academy'>
            <TwitterIcon size={40} round={true} />
          </a>
        </Box>
    
  );
}

// https://pinterest.com/academy/
// http://instagram.com/academy