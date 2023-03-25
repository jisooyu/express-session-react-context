import React, { useContext } from 'react';
import { userContext } from '../context/AuthContext';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
    const userObject = useContext(userContext);

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
    return (
        <div style={{ height: 'auto' }}>
            <AppBar sx={{ marginBottom: 10 }}>
                <Toolbar >
                    <SlowMotionVideoIcon />
                    <Typography>
                        Slow Coding
                    </Typography>
                    <Toolbar style={{ marginLeft: 'auto' }}>
                        {userObject ? (
                            <>
                                Logout
                                <LogoutIcon onClick={googleLogout} />
                            </>
                        ) : (
                            <>
                                Google Login
                                <LoginIcon onClick={googleLogin} />
                            </>
                        )}
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;
