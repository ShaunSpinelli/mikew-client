import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <div className="Navbar">
        <div className="Navbar--links"> 
            <NavLink exact to="/"> MW </NavLink>
            <NavLink exact to="/about"> About Michael </NavLink>
            <NavLink exact to="/contact"> Contact </NavLink>
            <NavLink exact to="/booking"> Book an Appointment </NavLink>
            <NavLink exact to="/admin"> Admin </NavLink>
            <NavLink exact to="/login"> Login </NavLink>
        </div>
    </div>
)
 
export default Nav