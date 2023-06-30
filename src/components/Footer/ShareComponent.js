import * as React from 'react';
import { FacebookIcon,
         TwitterIcon,
          InstapaperIcon,
        EmailIcon,
         PinterestIcon,
        } from 'react-share';
import './style.css';



export default function ShareComponent() {
  

  return (
    
        <div className='share' >
         <a
           href='https://facebook.com/academy'>
            <FacebookIcon size={40} round={true} />
          </a>
          <a
           href=''>
            <PinterestIcon size={40} round={true} />
          </a>
          <a
           href=''>
            <InstapaperIcon size={40} round={true} />
          </a>
          <a
           href=''>
            <EmailIcon size={40} round={true} />
          </a>
          <a
           href='https://twitter.com/academy'>
            <TwitterIcon size={40} round={true} />
          </a>
        </div>
    
  );
}

// https://pinterest.com/academy/
// http://instagram.com/academy