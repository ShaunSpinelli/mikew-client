import React from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-bootstrap-time-picker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

import data from './dummyBookings.json' // will be replaced by a get request.

const bookings = data.bookings

class MakeBooking extends React.Component {
    state = {
      date: moment(),
      startTime: null,
      endTime: null,
    //   bookingStatus: null,
      bookingButton: true
    }
 
  handleDateChange = (date) => {
    this.setState({ date }, () => { console.log('Start time is: ', (this.state.date).format('MM/DD/YYYY')) }) 
    console.log(bookings)
  }

  handleStartTimeChange = (startTime) => {
     this.setState({ startTime }, () => { console.log('Start time is: ', this.state.startTime) })
     this.setState({ bookingButton: false })
  }

  handleEndTimeChange = (endTime) => {
    this.setState({ endTime }, () => { console.log('End time is: ', this.state.endTime) })
  }

  handleBookingRequest = () => { //puts state into an object, with date formatted, and in 24hr time
        this.setState({ bookingStatus: 'pending' }, () => { console.log('Booking Status: ', this.state.bookingStatus) })

        let booking = {
            date: this.state.date.format('MM/DD/YYYY'),
            startTime: this.timeConverter(this.state.startTime),
            endTime: this.timeConverter(this.state.endTime),
            clientId: 1,
            bookingStatus: this.state.bookingStatus
        }
    console.log(booking)
  }

  // this works. IT DOSNT live update, check console.
  // We just need to post the updated JSON to db in this function, same with declined.
  // Maybe use state for live update? 
  handleApprovedBooking = (bookingID) => { 
    console.log(bookingID) 
    bookings[bookingID].bookingStatus = "approved"
    console.log(bookings[bookingID].bookingStatus)
    // this.setState({ bookingStatus: 'approved' }, () => { console.log('Booking Status: ', this.state.bookingStatus) })
  }

  handleDeclineBooking = (bookingID) => { 
    console.log(bookingID)
    bookings[bookingID].bookingStatus = "declined"
    console.log(bookings[bookingID].bookingStatus)
    // this.setState({ bookingStatus: 'declined' }, () => { console.log('Booking Status: ', this.state.bookingStatus) })
  }

  timeConverter = (time) => {
    let single = (time/3600)
    if((single % 1) !== 0){
        single -= .5
       return single += ":30"
    }
    return single + ":00"
  } 

  render() {
      const {startTime, endTime, bookingButton} = this.state
    return (
        <div>
            <h3> what day? </h3>
            <DatePicker
                selected= {moment()}
                onChange={this.handleDateChange}
            />
            <h3> what time? </h3>
            <p> start </p> 
            <TimePicker 
                start={"7:00"}
                end="16:00" 
                step={30} 
                value={startTime }
                onChange={this.handleStartTimeChange}
            />
            <p> end </p> 
            <TimePicker 
                start={ this.timeConverter(startTime) || "7:30" } 
                end="17:00" 
                step={30}
                value={endTime}
                onChange={this.handleEndTimeChange}
            />
            <br />
            <button disabled={bookingButton}  onClick={this.handleBookingRequest}> Make Booking request! </button>
            
            <h1> All Bookings </h1>
            {
                bookings.map((booking) => {
                    return (
                        <div key={booking.clientId}> 
                            <h3> date: {booking.date} </h3>
                            <p> starts: {booking.startTime} </p>
                            <p> ends: {booking.endTime} </p>
                            <p> booking status: {booking.bookingStatus} </p>
                            <button onClick={() => this.handleApprovedBooking(booking.clientId)}> Approve Booking? </button>
                            <button onClick={() => this.handleDeclineBooking(booking.clientId)}> Decline Booking? </button>
                        </div>
                    )
                })
            }
        </div>
    )
  }
}

export default MakeBooking;