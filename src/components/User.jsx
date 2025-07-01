import React, {  useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { userContext } from "../Context/Context";

 
export default function User(){
    const [user,setUser]=useContext(userContext);
    return (
        
       <div className="user">
        {console.log(user)}
        <Link className="user-link" to="/user/john">john</Link>
        <Link className="user-link" to="/user/jane">jane</Link>
        <Link className="user-link" to="/user/jack">jack</Link>
        <Outlet></Outlet>
        </div>
    )
}