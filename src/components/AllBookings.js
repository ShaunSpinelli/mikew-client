import React from 'react';
import orderBy from 'lodash.orderby' // one function from lodash library.
import moment from 'moment'

import data from './dummyBookings.json' // will be replaced by a get request, and put into componentWillMount.

const bookingsData = orderBy(data.bookings, (o) => {
    return new moment(o.date).format('YYYYMMDD')
}) // this arranges the bookings by data, most recent data is first.
// buttons arent on the right bookings, they work when they arent order like below.

// const bookingsData = data.bookings //this 

class AllBookings extends React.Component {
    state = { 
        bookings: bookingsData
     }
            // We just need to post the updated object to db in this function, same with declined.
        handleApprovedBooking = (bookingID) => { 
            let bookingsCopy = bookingsData

            bookingsCopy.forEach((obj) => {
                if(obj.clientId === bookingID){
                    obj.bookingStatus = 'approved'
                }
            })
            this.setState({bookings: bookingsCopy})
        }

        handleDeclineBooking = (bookingID) => { 
            let bookingsCopy = this.state.bookings

            bookingsCopy.forEach((obj) => {
                if(obj.clientId === bookingID){
                    obj.bookingStatus = 'declined'
                }
            })
            this.setState({bookings: bookingsCopy})
        }

        addTwo = (num,num2) => {
            return num + num2
        }

    render() { 
        console.log(this.state.bookings)
        const { bookings } = this.state
        return ( 
            <div>
            <h1> All Bookings </h1>
            {
                bookings.map((booking) => {
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
            }
            </div>
         )
    }
}
 
export default AllBookings;