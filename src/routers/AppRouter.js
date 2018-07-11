import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Nav from '../components/Nav.js'
import HomePage from '../components/HomePage.js'
import About from '../components/About.js'
import Contact from '../components/Contact.js'
import MakeBooking from '../components/MakeBooking.js'
import Login from '../components/Login.js'
import Footer from '../components/Footer.js'
import AllBookings from '../components/AllBookings.js'
import NotFoundPage from '../components/NotFoundPage.js'

const AppRouter = () => (
    <BrowserRouter> 
       <div>
        <Nav />
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/booking" component={MakeBooking} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={AllBookings} />
            <Route component={NotFoundPage} />
        </Switch>      
        <Footer />
      </div>
    </BrowserRouter>
)

export default AppRouter