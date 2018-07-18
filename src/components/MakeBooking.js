import React from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-bootstrap-time-picker'
import moment from 'moment'
import axios from 'axios'
import 'react-datepicker/dist/react-datepicker.css'

class MakeBooking extends React.Component {
    state = {
      date: moment(),
      startTime: null,
      endTime: null,
      bookingButton: true,
      note: "yo",
      sent: "Make booking request",
      error: ""
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

  handleNote = (e) => {
      let note = e.target.value
      this.setState({ note })
  } 

  handleBookingRequest = () => { //puts state into an object, with date formatted, and in 24hr time
    if(localStorage.getItem('token')){
        this.setState({sent: "sending"})
        let booking = {
            date: this.state.date.format('MM/DD/YYYY'),
            startTime: this.timeConverter(this.state.startTime),
            endTime: this.timeConverter(this.state.endTime),
            clientId: 1,
            info: this.state.note,
            bookingStatus: "pending"
        }
    axios.post("https://mikewserver.herokuapp.com/bookings/new", booking)
    .then(() => this.setState({sent: "sent!", bookingButton: true}))
    .catch((err) => { console.log(err) })
    } else {
        this.setState({error: "you must log in to make a request"})
    }
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
    const {error, sent, startTime, endTime, bookingButton} = this.state
    return (
        <div className="Makebooking-container">
            <div className= "Makebooking">
                <div className= "Makebooking--header"> 
                   <p className="Makebooking--headertitle"> Make a Booking Request </p>
                   <p className="Makebooking--headername">  with Michael Waye </p>
                </div>
                <div className= "Makebooking--whatDate">
                    <h3> what day? </h3>
                    <DatePicker
                        selected= {this.state.date}
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
                <div className="Makebooking--note"> 
                    <p> Leave a note: </p>
                    <input className="Makebooking--note--input" onChange={this.handleNote} name="note" />
                </div>
                <div className="Makebooking--buttonholder">
                    <button className="Makebooking--button" disabled={bookingButton}  onClick={this.handleBookingRequest}> {sent} </button>
                </div>
                {error}
            </div>
        </div>
    )
  }
}

export default MakeBooking;