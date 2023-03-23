import React, { useContext } from 'react'
import { userContext } from '../context/AuthContext'

const DashBoard = () => {
    const userObject = useContext(userContext)
    return (
        <div>
            {userObject ? <div>Welcome to Slow Coding, {userObject.googleId}</div> : null}
        </div>
    )
}

export default DashBoard