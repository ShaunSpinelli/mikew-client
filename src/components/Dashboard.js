import React from 'react'
import AllBookings from '../components/AllBookings.js'
import AllContacts from '../components/AllContacts.js'
import AllUsers from '../components/AllUsers.js'
const jwtDecode = require('jwt-decode')

// const decoded = jwtDecode(localStorage.getItem('token'))

export default () =>(
    <div>
        <h1>DashBoard</h1>
        <p>Bookings</p>
        {/* <AllBookings />
        {decoded.role === 'admin' && 
        <div>
            <p>Contact Requests</p>
             <AllContacts />
        </div> */}
    
    }
    </div>
)