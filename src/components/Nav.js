import React, {Component, Fragment} from 'react'
import { Navbar, StyledLink, FirstStyledLink, Button, Initial, Name } from '../styles/cssInJs/Nav.styles';
import Login from '../components/Login'
import Register from '../components/Register'

class Nav extends Component {

    render(){
        return (
            <Navbar>
                <FirstStyledLink exact to="/">
                    <Initial first>M</ Initial>
                    <Initial>W</ Initial>
                </FirstStyledLink>
                <StyledLink exact to="/"> About Michael </StyledLink>
                <StyledLink exact to="/contact"> Contact </StyledLink>
                <StyledLink exact to="/booking"> Book an Appointment </StyledLink>
                { localStorage.token ? 
                    <Fragment> 
                        <StyledLink exact to="/profile"> Profile </StyledLink>
                        <StyledLink to="/" onClick={this.props.logout}> Logout </StyledLink> 
                    </ Fragment>
                :  
                <Fragment> 
                    <Login updatedLogIn={this.props.updatedLogIn}/>
                    <Register />
                </ Fragment> }
            </ Navbar>
        )
    }
}

 
export default Nav