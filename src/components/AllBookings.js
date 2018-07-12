import React from 'react'
import orderBy from 'lodash.orderby' // one function from lodash library.
import moment from 'moment'
import axios from 'axios'
import Booking from './Booking'


class AllBookings extends React.Component {
    state = { 
        bookings: [],
        declinedBookings: [],
        approvedBookings: [],
        pendingBookings: [],
        completedBookings: []
     }

    componentWillMount(){
        axios.get("https://mikewserver.herokuapp.com/bookings/pending")
        .then((response) => {
            let pendingBookings = orderBy(response.data, (o) => { new moment(o.date).format('YYYYMMDD') })
            response.data.forEach((data) => { this.checkBookingStatus(data) })
            this.setState({ pendingBookings }) })
        .catch((err) => { console.log(err) })

        axios.get("https://mikewserver.herokuapp.com/bookings/completed")
        .then((response) => {
            let completedBookings = orderBy(response.data, (o) => { new moment(o.date).format('YYYYMMDD') })
            response.data.forEach((data) => { this.checkBookingStatus(data) })
            this.setState({ completedBookings }) })
        .catch((err) => { console.log(err) })

        axios.get("https://mikewserver.herokuapp.com/bookings/declined")
        .then((response) => {
            let declinedBookings = orderBy(response.data, (o) => { new moment(o.date).format('YYYYMMDD') })
            response.data.forEach((data) => { this.checkBookingStatus(data) })
            this.setState({ declinedBookings }) })
        .catch((err) => { console.log(err) })

        axios.get("https://mikewserver.herokuapp.com/bookings/approved")
        .then((response) => {
            let approvedBookings = orderBy(response.data, (o) => { new moment(o.date).format('YYYYMMDD') })
            response.data.forEach((data) => { this.checkBookingStatus(data) })
            this.setState({ approvedBookings }) })
        .catch((err) => { console.log(err) })
    }

        checkBookingStatus = (booking) => {
            if(booking.bookingStatus === "approved"){
                this.setState({ approvedBookings: this.state.approvedBookings.concat(booking) })
            } else if(booking.bookingStatus === "declined") {
                this.setState({ declinedBookings: this.state.declinedBookings.concat(booking) })
            } else if(booking.bookingStatus === "pending"){
                this.setState({ pendingBookings: this.state.pendingBookings.concat(booking) })
            } else if(booking.bookingStatus === "completed"){
                this.setState({ completedBookings: this.state.completedBookings.concat(booking) })
            }
        }


        handleApprovedBooking = (bookingID) => { 
            let bookingsCopy = this.state.pendingBookings
            let approved = this.state.approvedBookings

            bookingsCopy.forEach((obj) => {
                if(obj._id === bookingID){
                    obj.bookingStatus = "approved"
                    approved.push(obj)
                    axios.put(`https://mikewserver.herokuapp.com/bookings/id`, {id: obj._id , bookingStatus: 'approved'})
                    .then((response) => { console.log(response)})
                    .catch((err) => {console.log(err)})
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
            let declined = this.state.declinedBookings

            bookingsCopy.forEach((obj) => {
                if(obj._id === bookingID){
                    obj.bookingStatus = "declined"
                    declined.push(obj)
                    axios.put(`https://mikewserver.herokuapp.com/bookings/id`, {id: obj._id , bookingStatus: 'declined'})
                    .then((response) => { console.log(response)})
                    .catch((err) => {console.log(err)})
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

        readableDate = (date) => {
            return moment(date, 'YYYYMMDD').format('MMM Do YY')
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
                        <div>  
                            <Booking 
                                date = {this.readableDate(booking.date)} 
                                startTime = {booking.startTime} 
                                endTime = {booking.endTime}
                                bookingStatus = {booking.bookingStatus}
                                info = {booking.info}
                                />
                            <button className="approve-button" onClick={() => this.handleApprovedBooking(booking._id)}> Approve Booking? </button>
                            <button onClick={() => this.handleDeclineBooking(booking._id)}> Decline Booking? </button>
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
                        <div key = {booking._id}> 
                            <Booking 
                                date = {this.readableDate(booking.date)} 
                                startTime = {booking.startTime} 
                                endTime = {booking.endTime}
                                bookingStatus = {booking.bookingStatus}
                                info = {booking.info}
                            />
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
                        <div key = {booking._id}> 
                            <Booking 
                                date = {this.readableDate(booking.date)} 
                                startTime = {booking.startTime} 
                                endTime = {booking.endTime}
                                bookingStatus = {booking.bookingStatus}
                                info = {booking.info}
                            />
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
                        <div key = {booking._id}> 
                            <Booking 
                                date = {this.readableDate(booking.date)} 
                                startTime = {booking.startTime} 
                                endTime = {booking.endTime}
                                bookingStatus = {booking.bookingStatus}
                                info = {booking.info}
                            />
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