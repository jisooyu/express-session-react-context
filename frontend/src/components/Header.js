import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/AuthContext';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Link, Menu, MenuItem } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
    const userObject = useContext(userContext);
    const navigate = useNavigate();
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

    const handleMenuItemClick = (route) => {
        handleMenuClose();
        navigate(route);
    }

    const menuItemStyle =
    {
        color: "#333",
        fontSize: "14px",
        "&:hover": {
            backgroundColor: "#f5f5f5"
        }
    }

    const linkTextStyle = { textDecoration: 'none', color: 'inherit', marginLeft: '30px' };
    return (
        <div style={{ height: 'auto' }}>
            <AppBar sx={{ marginBottom: 10 }}>
                <Toolbar >
                    <SlowMotionVideoIcon />
                    <Typography>
                        <Link href='/' sx={{ textDecoration: 'none', color: 'inherit' }}>Slow Coding</Link>
                    </Typography>
                    <Typography>
                        <Link href='/prague' sx={linkTextStyle}>Infant Jesus</Link>
                    </Typography>
                    <Typography>
                        <Link href='/fatima' sx={linkTextStyle}>Our Lady of Fatima</Link>
                    </Typography>
                    <Typography>
                        <Link href='/faust' sx={linkTextStyle}>Sister Faustina</Link>
                    </Typography>
                    <Typography sx={{ textDecoration: 'none', color: 'inherit', marginLeft: '30px', cursor: 'pointer' }} onClick={handleMenuOpen}>
                        Rosary
                    </Typography>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={() => handleMenuItemClick('/joyful')} sx={menuItemStyle} >Joyful Mysteries</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('/sorrowful')} sx={menuItemStyle}>Sorrowful Mysteries</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('/luminous')} sx={menuItemStyle}>Luminous Mysteries</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('/glorious')} sx={menuItemStyle}>Glorious Mysteries</MenuItem>
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
