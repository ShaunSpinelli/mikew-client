import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Nav = (props) => (
    <div className="Navbar">
        <div className="Navbar--links"> 
            <NavLink exact to="/"> MW </NavLink>
            <NavLink exact to="/about"> About Michael </NavLink>
            <NavLink exact to="/contact"> Contact </NavLink>
            <NavLink exact to="/booking"> Book an Appointment </NavLink>
            <NavLink exact to="/admin"> Admin </NavLink>
            { localStorage.token ? <NavLink exact to="/logout"> Logout </NavLink> 
            :  <React.Fragment> <Login updatedLogIn={props.updatedLogIn}/> <Register /> </React.Fragment> }
        </div>
    </div>
)
 
export default Nav