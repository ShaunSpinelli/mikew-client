import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'

const Nav = (props) => (
    <div className="Navbar">
        <div className="Navbar--links"> 
            <NavLink exact to="/"> MW </NavLink>
            <NavLink exact to="/about"> About Michael </NavLink>
            <NavLink exact to="/contact"> Contact </NavLink>
            <NavLink exact to="/booking"> Book an Appointment </NavLink>
            {/* if not logged in display this and add register link */}
            { localStorage.token ? <NavLink exact to="/logout"> Logout</NavLink> 
            : <Login updatedLogIn={props.updatedLogIn}/> }

            {/* if logged in change admin to profile pic path tha will take them to there profile dashboard */}
            <NavLink exact to="/admin"> Admin </NavLink>
        </div>
    </div>
)
 
export default Nav