import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';



export default function NavDrawer() {
    const [open, setOpen] = useState(false);






    return (
        <div style={{display: "grid"}}>
            <IconButton onClick={() => setOpen(true)} className='menu'>
                <MenuRoundedIcon className='link' />
            </IconButton>

            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="container-drawer">
                        <ul className="drawer">
                            <li><a className="link">Home</a></li>
                            <li><a className="link">About IASO</a></li> 
                            <li><a className="link">News</a></li>
                            <li><a className="link">Book Appointment</a></li>
                            <li><a className="link">Contact</a></li>
                           <li><a className="link">Search</a></li> 
                           <li><a className="link">Need Help</a></li>

                        </ul>

                    
                </div>
            </Drawer>

        </div>
    );
}