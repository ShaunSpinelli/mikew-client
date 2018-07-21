import React, { Component } from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Nav from '../components/Nav.js'
import HomePage from '../components/HomePage.js'
import About from '../components/About.js'
import Contact from '../components/Contact.js'
import MakeBooking from '../components/MakeBooking.js'
import Footer from '../components/Footer.js'
import NotFoundPage from '../components/NotFoundPage.js'
import Dashboard from '../components/Dashboard.js'
import injectGlobal from '../styles/Global.styles'

class AppRouter extends Component {
    state= {
        token:'',
        loggedIn: false
    }
    // pass to log in component and execute when log in is complete
    updatedLogIn = () => {
        this.setState({loggedIn: true})
        console.log('working')
    }

    logout = () => {
        localStorage.clear('token')
        this.setState({local: ''})
    }

    render () {
        return (
            <BrowserRouter> 
            <div>
             <Nav updatedLogIn={this.updatedLogIn} logout={this.logout}/>
             <Switch>
                 <Route path="/" component={HomePage} exact={true} />
                 <Route exact path="/about" component={About} />
                 <Route exact path="/contact" component={Contact} />
                 <Route exact path="/booking" component={MakeBooking} />
                 {/* <Route exact path="/login" render={() => <Login  updatedLogIn={this.updateLoggedIn}/>} /> */}
                 <Route exact path="/profile" component={Dashboard}/>
                 <Route component={NotFoundPage} />
             </Switch>      
             <Footer />
           </div>
         </BrowserRouter>
    )}}

export default AppRouter