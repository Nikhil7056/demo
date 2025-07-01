import React, { createContext, useState } from "react";

export const userContext = createContext();
export default function Context(props){
    const [user,setUser]= useState([{
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    }])
    return (<>
    <userContext.Provider value={[user,setUser]}>{props.children}</userContext.Provider>
    </>)
}
