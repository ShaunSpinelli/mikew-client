import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <div className="Navbar">
        <div className="Navbar--links"> 
            <NavLink exact to="/"> Home </NavLink>
            <NavLink exact to="/about"> About </NavLink>
            <NavLink exact to="/booking"> Make a Booking </NavLink>
            <NavLink exact to="/contact"> Contact </NavLink>
            <NavLink exact to="/login"> Login/Signup </NavLink>
        </div>
    </div>
)
 
export default Nav