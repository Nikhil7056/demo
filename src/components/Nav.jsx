import React from "react";
import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <NavLink
        style={(element) => {
          return {color: element.isActive ? "red" : ""}
        }}
        className="nav-link"
        to="/home"
      >
        home
      </NavLink>
      <NavLink
        style={(element) => {
          return {color: element.isActive ? "red" : ""}
        }}
        className="nav-link"
        to="/about"
      >
        about
      </NavLink>
      <NavLink
        
        className= {(element)=>{
       return element.isActive? ["nav-link","color-red"].join(" "): "nav-link"
        }}
        to="/contact"
      >
        contact
      </NavLink>
      <NavLink to="/user" className="nav-link">user</NavLink>
      <NavLink to="/service" className="nav-link">service</NavLink>
    </nav>
  );
}

export default Nav;
