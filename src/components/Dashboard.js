import React from 'react'
import AllBookings from '../components/AllBookings.js'
import AllContacts from '../components/AllContacts.js'
import AllUsers from '../components/AllUsers.js'
import Profile from '../components/Profile.js'
const jwtDecode = require('jwt-decode')

// const decoded = jwtDecode(localStorage.getItem('token'))

export default class extends React.Component  {
    
decoded = jwtDecode(localStorage.getItem('token'))
    
    
    render(){
        return(

    <div>
        <Profile />
        <p>Bookings</p>
        <AllBookings />
        {this.decoded.role === 'admin' && 
        <div>
            <p>Contact Requests</p>
             <AllContacts />
        </div>
    
    }
    </div>
)}}