import React from 'react';
import orderBy from 'lodash.orderby' // one function from lodash library.
import moment from 'moment'
import axios from 'axios'


class AllBookings extends React.Component {
    state = { 
        bookings: [],
        declinedBookings: [],
        approvedBookings: [],
        pendingBookings: [],
        completedBookings: []
     }

     componentWillMount(){

        axios.get("https://mikewserver.herokuapp.com/bookings")
            .then((response) => {
                let bookings = orderBy(response.data, (o) => {
                    return new moment(o.date).format('YYYYMMDD')
                })
                console.log(response.data)
                response.data.forEach((data) => {
                    this.checkBookingStatus(data)
                })

            this.setState({ bookings }, () => { console.log(this.state) })
        })
    }

        checkBookingStatus = (booking) => {
            if(booking.bookingStatus === "approved"){
                this.setState({ approvedBookings: this.state.approvedBookings.concat(booking) })
            } else if(booking.bookingStatus === "declined") {
                this.setState({ declinedBookings: this.state.declinedBookings.concat(booking) })
            } else if(booking.bookingStatus === "pending"){
                this.setState({ pendingBookings: this.state.pendingBookings.concat(booking) })
                console.log('pending')
            } else if(booking.bookingStatus === "completed"){
                this.setState({ completedBookings: this.state.completedBookings.concat(booking) })
            }
        }


        handleApprovedBooking = (bookingID) => { 

            let bookingsCopy = this.state.pendingBookings
            let approved = []

            bookingsCopy.forEach((obj) => {
                if(obj.clientId === bookingID){
                    obj.bookingStatus = "approved"
                    approved.push(obj)
                }
            })

            bookingsCopy = bookingsCopy.filter((obj) => { 
                return obj.bookingStatus !== "approved";
            })

            this.setState({
                        approvedBookings: approved,
                        pendingBookings: bookingsCopy
                        })
        }


        handleDeclineBooking = (bookingID) => { 
                
            let bookingsCopy = this.state.pendingBookings
            let declined = []

            bookingsCopy.forEach((obj) => {
                if(obj.clientId === bookingID){
                    obj.bookingStatus = "declined"
                    declined.push(obj)
                }
            })

            bookingsCopy = bookingsCopy.filter((obj) => { 
                return obj.bookingStatus !== "declined";
            })

            this.setState({
                        declinedBookings: declined,
                        pendingBookings: bookingsCopy
                        })
        }


    render() { 
        const { completedBookings, declinedBookings, approvedBookings, pendingBookings } = this.state
        return ( 
            <div>
            <h1> Pending Bookings </h1>
            {
                pendingBookings ? 
                pendingBookings.map((booking) => {
                    return (
                        <div key={booking.clientId}> 
                            <h3> date: {moment(booking.date, 'YYYYMMDD').format('MMM Do YY')  /* reformats into a more readable date. */} </h3> 
                            <p> starts: {booking.startTime} </p>
                            <p> ends: {booking.endTime} </p>
                            <p> booking status: {booking.bookingStatus} </p>

                            <button className="approve-button" onClick={() => this.handleApprovedBooking(booking.clientId)}> Approve Booking? </button>
                            <button onClick={() => this.handleDeclineBooking(booking.clientId)}> Decline Booking? </button>
                        </div>
                    )
                })
            : <p> loading hollup.. </p>
            }
            <h1> Approved Bookings </h1>
            {
                approvedBookings ? 
                approvedBookings.map((booking) => {
                    return (
                        <div key={booking.clientId}> 
                            <h3> date: {moment(booking.date, 'YYYYMMDD').format('MMM Do YY')  /* reformats into a more readable date. */} </h3> 
                            <p> starts: {booking.startTime} </p>
                            <p> ends: {booking.endTime} </p>
                            <p> booking status: {booking.bookingStatus} </p>
                        </div>
                    )
                })
            : <p> loading hollup.. </p>
            }
            <h1> Declined Bookings </h1>
            {
                declinedBookings ? 
                declinedBookings.map((booking) => {
                    return (
                        <div key={booking.clientId}> 
                            <h3> date: {moment(booking.date, 'YYYYMMDD').format('MMM Do YY')  /* reformats into a more readable date. */} </h3> 
                            <p> starts: {booking.startTime} </p>
                            <p> ends: {booking.endTime} </p>
                            <p> booking status: {booking.bookingStatus} </p>
                        </div>
                    )
                })
            : <p> loading hollup.. </p>
            }
            <h1> Completed Bookings </h1>
            {
                completedBookings ? 
                completedBookings.map((booking) => {
                    return (
                        <div key={booking.clientId}> 
                            <h3> date: {moment(booking.date, 'YYYYMMDD').format('MMM Do YY')  /* reformats into a more readable date. */} </h3> 
                            <p> starts: {booking.startTime} </p>
                            <p> ends: {booking.endTime} </p>
                            <p> booking status: {booking.bookingStatus} </p>
                        </div>
                    )
                })
            : <p> loading hollup.. </p>
            }
            </div>
         )
    }
}
 
export default AllBookings;