import React, {Fragment} from 'react'
import AllBookings from '../components/AllBookings.js'
import AllContacts from '../components/AllContacts.js'
import AllUsers from '../components/AllUsers.js'
import Profile from '../components/Profile.js'
const jwtDecode = require('jwt-decode')

export default class extends React.Component  {
    state = {
        show: "bookings" //can also be contact, or users, this is what determines which section is rendered to the screen at a time.
    }

    decoded = jwtDecode(localStorage.getItem('token'))

    toggleShow = (section) => {
        this.setState({show: section}) //triggered by button, button will pass "contact", "booking", or "user" which will change the view.
    }

    render(){
        return(
            <div className="dashboard--holder">
                <Profile />
                <button className="sendContact dash-btn" onClick={() => this.toggleShow("bookings")}> Bookings </button>
                {(this.decoded.role === 'admin') && 
                    <Fragment>
                    <button className="sendContact dash-btn" onClick={() => this.toggleShow("contacts")}> Contacts </button>
                    <button className="sendContact dash-btn" onClick={() => this.toggleShow("users")}> Users </button>
                    </Fragment>
                }
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
                    {(this.decoded.role === 'admin' && this.state.show === "users") && 
                        <div>
                            <AllUsers />
                        </div>
                    }
                </div>
            </div>
        )
    }
}