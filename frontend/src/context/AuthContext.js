import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const userContext = createContext({});

const AuthContext = (props) => {
    const [userObject, setUserObject] = useState();
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("/api/getuser")
            if (res.data) {
                console.log("res.data", res.data);
                setUserObject(res.data)
            }
        }
        fetchUser();
    }, [])
    return (
        <userContext.Provider value={userObject}>{props.children}</userContext.Provider>
    )
}

export default AuthContext