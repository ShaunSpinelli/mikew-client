import React, {Component, Fragment} from 'react'
import { Navbar, StyledLink, FirstStyledLink, Button } from '../styles/Nav.styles';
import Login from '../components/Login'
import Register from '../components/Register'

class Nav extends Component {
    // state ={ 
    //     scrollingLock: false
    // }

    // componentDidMount(){
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    
    // handleScroll = () => {

    //     if (window.scrollY > 100) {
    //       this.setState({
    //         scrollingLock: true
    //       });
    //     } else if (window.scrollY < 100) {
    //       this.setState({
    //         scrollingLock: false
    //       });
    //     }
    // }

    render(){
        return (
            <Navbar>
                <FirstStyledLink exact to="/"> MW </FirstStyledLink>
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
                    <Button><Login updatedLogIn={this.props.updatedLogIn}/></Button>
                    <Button><Register /></Button>
                </ Fragment> }
            </ Navbar>
        )
    }
}

 
export default Nav