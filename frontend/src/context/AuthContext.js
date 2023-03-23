import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const userContext = createContext({});

export const AuthContext = (props) => {
    const [userObject, setUserObject] = useState();
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("/api/current_user", { withCredentials: true })
            console.log("res", res);
            if (res.data) {
                setUserObject(res.data)
            }
            /* 
                redux 라면..
                const res = await axios.get("/api/current_user", { withCredentials: true })
                dispatch({type: FETCH_USER, payload: res.data})
            */
        }
        fetchUser();
    }, [])
    return (
        <userContext.Provider value={userObject}>{props.children}</userContext.Provider>
    )
}
