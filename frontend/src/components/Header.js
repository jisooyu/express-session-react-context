import React, { useContext, useState } from 'react';
import { userContext } from '../context/AuthContext';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Link, Button, Menu, MenuItem } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
    const userObject = useContext(userContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const googleLogin = () => {
        window.location.href = '/auth/google';
    };

    const googleLogout = async () => {
        try {
            await axios.post('/api/logout');
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    };
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ height: 'auto' }}>
            <AppBar sx={{ marginBottom: 10 }}>
                <Toolbar >
                    <SlowMotionVideoIcon />
                    <Typography>
                        <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>Slow Coding</Link>
                    </Typography>
                    <Typography>
                        <Link href='/prague' style={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px' }}>Infant Jesus</Link>
                    </Typography>
                    <Typography>
                        <Link href='/fatima' style={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px' }}>Fatima Mother</Link>
                    </Typography>
                    <Typography>
                        <Link href='/faust' style={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px' }}>Sister Faust</Link>
                    </Typography>
                    <Typography style={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px', cursor: 'pointer' }} onClick={handleMenuOpen}>
                        Mysteries
                    </Typography>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose} >Joyful Mysteries</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Sorrowful Mysteries</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Luminous Mysteries</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Glorious Mysteries</MenuItem>
                    </Menu>
                    <Toolbar style={{ marginLeft: 'auto' }}>
                        {userObject ? (
                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <LogoutIcon onClick={googleLogout} />
                                <Typography onClick={googleLogout} variant='body1'>Logout</Typography>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <LoginIcon onClick={googleLogin} />
                                <Typography onClick={googleLogin} variant='body1'>Google Login</Typography>
                            </div>
                        )}
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;
