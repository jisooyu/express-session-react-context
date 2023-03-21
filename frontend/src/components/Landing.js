import React, { useContext } from 'react'
import { userContext } from '../context/AuthContext'

export default function Landing() {
    const userObject = useContext(userContext)

    return (
        <div>
            Home
            {userObject ? <div>Welcome, {userObject.googleId}</div> : null}
        </div>
    )
}
