import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import Login from './Login'
import Register from './Register'



class Nav extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            local: localStorage.token
        }
    }

    logout = () => {
        localStorage.clear('token')
        this.setState({local: ''})
    }

    render(){
        return (
            <div className="Navbar">
                <div className="Navbar--links"> 
                    <NavLink exact to="/"> MW </NavLink>
                    <NavLink exact to="/about"> About Michael </NavLink>
                    <NavLink exact to="/contact"> Contact </NavLink>
                    <NavLink exact to="/booking"> Book an Appointment </NavLink>
                    { this.state.local ? 
                        <React.Fragment> 
                            <NavLink exact to="/admin"> Admin </NavLink>
                            <NavLink to="/" onClick={this.logout}> Logout </NavLink> 
                        </React.Fragment>
                    :  
                    <React.Fragment> 
                        <Login updatedLogIn={this.props.updatedLogIn}/> 
                        <Register /> 
                    </React.Fragment> }
                </div>
            </div>
        )
    }
}
 
export default Nav