import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import User from "../components/User";
import UserDetail from "../components/UserDetail";
import Service from "../components/Service";
import { Routes, Route } from "react-router-dom";
function Routesdd() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/user" element={<User/>}>
        <Route path="/user/:name" element={<UserDetail/>} />
        </Route>
        <Route path="/service" element={<Service/>} />
      </Routes>
    </div>
  );
}

export default Routesdd;
