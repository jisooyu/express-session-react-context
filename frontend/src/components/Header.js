import React, { useContext } from 'react';
import { userContext } from '../context/AuthContext';
import axios from 'axios';

const Header = () => {
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
        <nav>
            <div className='nav-wrapper'>
                <a className='left brand-logo'>Slow Coding</a>
                <ul className='right'>
                    {userObject ? (
                        <li>
                            <div onClick={googleLogout}>Log Out</div>
                        </li>
                    ) : (
                        <li>
                            <div onClick={googleLogin}>Login With Google</div>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
