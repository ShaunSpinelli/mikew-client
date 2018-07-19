import React from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-bootstrap-time-picker'
import moment from 'moment'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {api} from '../api/init.js'
import 'react-datepicker/dist/react-datepicker.css'

const jwtDecode = require('jwt-decode')

class MakeBooking extends React.Component {
    state = {
      date: moment(),
      startTime: null,
      endTime: null,
      userID: "",
      note: "",
      sent: "Make booking request",
      bookingButton: true,
      error: ""
    }

    componentDidMount(){
        const decoded = jwtDecode(localStorage.getItem('token'))
        this.setState({userID: decoded.sub})
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
    .then(() => {this.setState({sent: "sent!", bookingButton: true}) 
                console.log(this.state) })
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
    const {note, error, sent, startTime, endTime, bookingButton} = this.state
    return (
        <div>
            <MuiThemeProvider>
                <div className="Makebooking-container">
                    <div className= "Makebooking">
                        <div className= "Makebooking--header"> 
                        <p className="Makebooking--headertitle"> Make a Booking Request </p>
                        <p className="Makebooking--headername">  with Michael Waye </p>
                        </div>
                        <div className= "Makebooking--whatDate">
                            <p> what day? </p>
                            <DatePicker
                                className= "Makebooking--datePicker"
                                selected= {this.state.date}
                                onChange={this.handleDateChange}
                            />
                        </div>
                        <div className="Makebooking--whatTime">
                            <p> what time? </p>
                            <div>
                                <span> start: </span> 
                                <TimePicker 
                                    className= "Makebooking--timePicker"
                                    start={"7:00"}
                                    end="16:00" 
                                    step={30} 
                                    value={startTime }
                                    onChange={this.handleStartTimeChange}
                                />
                            </div>
                            <span> end: </span> 
                            <TimePicker 
                                className= "Makebooking--timePicker"
                                start={ this.timeConverter(startTime) || "7:30" } 
                                end="17:00" 
                                step={30}
                                value={endTime} 
                                onChange={this.handleEndTimeChange}
                            />
                        </div>
                        <div className="Makebooking--note"> 
                            <TextField
                                    name= "note" 
                                    floatingLabelText= "note"
                                    value= {note}
                                    onChange= {this.handleNote}
                            />
                        </div>
                        <div className="Makebooking--buttonholder">
                            <button className="Makebooking--button" disabled={bookingButton}  onClick={this.handleBookingRequest}> {sent} </button>
                        </div>
                        {error}
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    )
  }
}

export default MakeBooking;