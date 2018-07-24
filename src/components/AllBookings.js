import React from 'react'
import moment from 'moment'
import Booking from './Booking'
import Loading from './Loading'
import { api } from '../api/init';

const jwtDecode = require('jwt-decode')

class AllBookings extends React.Component {
    state = { 
        declined: [],
        approved: [],
        pending: [],
        completed: [],
        cancelled: [],
        loading: false,
        show: "pending"
     }

     isAdmin = () =>{ //used in callbacks, and in statements, to check whether the decoded token is an admin.
        const decoded = jwtDecode(localStorage.getItem('token'))
        return decoded.role === "admin" 
     }

    componentDidMount(){
        this.setState({loading: true}) //displays loading screen
        const decoded = jwtDecode(localStorage.getItem('token'))
        if( this.isAdmin()){
            this.getAdminBookings()
        }else{ this.getUserBookings(decoded.sub) }
    }

    getAdminBookings = () => {
        api.get("bookings") //returns ALL bookings, not limited to user ID.
        .then((response) => {
            response.data.forEach((data) => { this.checkBookingStatus(data) })
            this.setState({loading: false }) })
        .catch((err) => { console.log(err);this.setState({loading: false }) })
    }

    getUserBookings = (id) => {
        api.get("users/bookings",{params : {id: id }})
        .then((response) => {
            response.data.forEach((data) => { this.checkBookingStatus(data) })
            this.setState({ loading: false }) })
        .catch((err) => { console.log(err) })
    }

    checkBookingStatus = (booking) => { //decides which category the bookings go into.
        let bookingStatus = booking.bookingStatus //booking.bookingsStatus is either Pending, Approved, Cancelled, Completed.
        this.setState({ [bookingStatus]: [...this.state[bookingStatus], booking] })
    }
        
    bookingSection = (bookingArr, admin) =>{
        return bookingArr.map((booking) => {
            return (
                <div className="contact" key = {booking._id}>  
                        <Booking {...booking}/>
                        {/* check for related buttons to display*/}
                        {admin && booking.bookingStatus === 'pending' ? 
                        <button className="approve-button" onClick={() => 
                            this.handleBookingChange(booking._id,booking.bookingStatus, 'approved')
                        }> Approve Booking? </button>:<p></p>}

                        {booking.bookingStatus === 'approved' || booking.bookingStatus === 'pending' ?
                        <button onClick={() => 
                            this.handleBookingChange(booking._id,booking.bookingStatus,'cancelled' )
                        }> Cancel Booking? </button>:<p></p>
                    }
                </div>
            )
        })
    }

    //Handles which booking category is shown, called on button click.
    toggleShow = (section) => {
        this.setState({show: section})
    }

        // updates state and back end when status of booking is changed
        handleBookingChange = (bookingId, current, update) =>{

            let currentBookings = this.state[current]
            let updateBookings = this.state[update]

            api.put('bookings/id', {id: bookingId , bookingStatus: `${update}`})
            .then((response) => { 
                currentBookings.forEach((obj) => {
                    if(obj._id === bookingId){
                        // find bookings updates status and adds in to new array
                        obj.bookingStatus = update
                        updateBookings.push(obj)
                        // deletes from current state array
                        let index = currentBookings.indexOf(obj)
                        currentBookings.splice(index,1)

                        this.setState({
                            [update] : updateBookings,
                            [current]: currentBookings
                        })
                    }
                })
            }).catch((err) => {console.log(err)})
        }
    
        // not being used right now 
        readableDate = (date) => ( moment(date, 'YYYYMMDD').format('MMM Do YY') )

    render() { 
        const { completed, approved, pending, cancelled } = this.state
        const { bookingSection, isAdmin, toggleShow } = this
        return ( 
            <div className="allbookings"> 
                <button onClick={() => toggleShow("pending")}> Pending </button>
                <button onClick={() => toggleShow("approved")}> Approved </button>
                <button onClick={() => toggleShow("cancelled")}> Cancelled </button>
                <button onClick={() => toggleShow("completed")}> Completed </button>
                
                {/* depending on what this.state.show is, is what category of bookings
                will be displayed, so only one can be shown at a time */}
                {(this.state.show === "pending") && 
                <div>
                    {bookingSection(pending,isAdmin())}
                </div>
                }
                {(this.state.show === "approved") && 
                <div>
                    {bookingSection(approved,isAdmin())}
                </div>
                }
                {(this.state.show === "completed") && 
                <div>
                    {bookingSection(completed,isAdmin())}
                </div>
                }
                {(this.state.show === "cancelled") && 
                <div >
                    {bookingSection(cancelled,isAdmin())}
                </div>
                }

            </div>
         )
    }
}
 
export default AllBookings;