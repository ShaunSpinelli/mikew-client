import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <div className="Navbar">
        <div className="Navbar--links"> 
            <NavLink exact to="/"> MW </NavLink>
            <NavLink exact to="/about"> About Mike </NavLink>
            <NavLink exact to="/booking"> Make Booking </NavLink>
            <NavLink exact to="/contact"> Get in Touch </NavLink>
            <NavLink exact to="/login"> Login </NavLink>
            <NavLink exact to="/testimonials"> Testimonials </NavLink>
        </div>
    </div>
)
 
export default Nav