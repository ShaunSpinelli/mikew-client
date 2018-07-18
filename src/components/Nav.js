import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Nav = (props)=> {

    return (
        <div className="Navbar">
            <div className="Navbar--links"> 
                <NavLink exact to="/"> MW </NavLink>
                <NavLink exact to="/about"> About MMichael </NavLink>
                <NavLink exact to="/contact"> Contact </NavLink>
                <NavLink exact to="/booking"> Book an Appointment </NavLink>
                { localStorage.token ? 
                    <React.Fragment> 
                        <NavLink exact to="/admin"> Admin </NavLink>
                        <NavLink to="/" onClick={props.logout}> Logout </NavLink> 
                    </React.Fragment>
                :  
                <React.Fragment> 
                    <Login updatedLogIn={props.updatedLogIn}/> 
                    <Register /> 
                </React.Fragment> }
            </div>
        </div>
    )
}

 
export default Nav