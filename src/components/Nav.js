import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

class Nav extends React.Component {
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
            <div className="Navbar">
                <div className="Navbar--links"> 
                    <NavLink exact to="/"> MW </NavLink>
                    <NavLink exact to="/"> About Michael </NavLink>
                    <NavLink exact to="/contact"> Contact </NavLink>
                    <NavLink exact to="/booking"> Book an Appointment </NavLink>
                    { localStorage.token ? 
                        <React.Fragment> 
                            <NavLink exact to="/profile"> Profile </NavLink>
                            <NavLink to="/" onClick={this.props.logout}> Logout </NavLink> 
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