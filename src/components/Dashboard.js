import React from 'react'
import AllBookings from '../components/AllBookings.js'
import AllContacts from '../components/AllContacts.js'
import AllUsers from '../components/AllUsers.js'
import Profile from '../components/Profile.js'
const jwtDecode = require('jwt-decode')

// const decoded = jwtDecode(localStorage.getItem('token'))

export default class extends React.Component  {
    state = {
        show: null
    }

    decoded = jwtDecode(localStorage.getItem('token'))
    

    toggleShow = (section) => {
        this.setState({show: section})
    }

    render(){
        return(
        <div className="dashboard--holder">

            <Profile />
            <p>Bookings</p>

            <button onClick={() => this.toggleShow("contacts")}> Contacts </button>
            <button onClick={() => this.toggleShow("bookings")}> Bookings </button>
            <div className="dashboard--toggler">
                {(this.state.show === "bookings") && 
                <div>
                    <AllBookings />
                </div>
                }

                {(this.decoded.role === 'admin' && this.state.show === "contacts") && 
                <div>
                    <AllContacts />
                </div>
                }
            </div>

        </div>
        )
    }
}