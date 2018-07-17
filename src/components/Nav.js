import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <div className="Navbar">
        <div className="Navbar--links"> 

            <NavLink exact to="/"> MW </NavLink>
            <NavLink exact to="/about"> About Mike </NavLink>
            <NavLink exact to="/booking"> Make Booking </NavLink>
            <NavLink exact to="/testimonials"> Testimonials </NavLink>
            <NavLink exact to="/contact"> Get in Touch </NavLink>
            {/* if not logged in display this and add register link */}
            <NavLink exact to="/login"> Login </NavLink>
            {/* if logged in change admin to profile pic path tha will take them to there profile dashboard */}
            <NavLink exact to="/admin"> Admin </NavLink>

        </div>
    </div>
)
 
export default Nav