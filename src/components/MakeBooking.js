import React from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-bootstrap-time-picker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class MakeBooking extends React.Component {
    state = {
      date: moment(),
      startTime: null,
      endTime: null,
      bookingButton: true
    }
 
  handleDateChange = (date) => {
    this.setState({ date }, () => { console.log('The Date is: ', (this.state.date).format('YYYYMMDD')) }) 
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

  timeConverter = (time) => {
    let single = (time/3600)
    if((single % 1) !== 0){
        single -= .5
       return single += ":30"
    }
    return single + ":00"
  } 

  render() {
    const {startTime, endTime, bookingButton, bookings} = this.state
    return (
        <div>
            <div className= "Makebooking">
                <div className= "Makebooking--whatDate">
                    <h3> what day? </h3>
                    <DatePicker
                        selected= {moment()}
                        onChange={this.handleDateChange}
                    />
                </div>
                <div className="Makebooking--whatTime">
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
                </div>
            </div>
            <div className="Makebooking--buttonholder">
                <button className="Makebooking--button"disabled={bookingButton}  onClick={this.handleBookingRequest}> Make Booking request! </button>
            </div>
        </div>
    )
  }
}

export default MakeBooking;