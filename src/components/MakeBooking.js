import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-bootstrap-time-picker'
import moment from 'moment'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {api, setJwt} from '../api/init.js'
import { Redirect } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import { Title, Subtitle } from '../styles/cssInJs/Mixins.styles';
import {BookingForm, Question, Text } from '../styles/cssInJs/MakeBooking.styles';

const jwtDecode = require('jwt-decode')
let local = {}

class MakeBooking extends Component {
    state = {
      date: moment(),
      startTime: null,
      endTime: null,
      userID: "",
      note: "",
      sent: "Make booking request",
      bookingButton: true,
      error: "", 
      isAuthenticated: false // if true user will be redirected to home page.
    }

    componentWillMount(){
        setJwt(localStorage.getItem('token'))
        console.log(moment())
        if(localStorage.getItem('token')){
            const decoded = jwtDecode(localStorage.getItem('token')) //checks token
            this.setState({userID: decoded.sub})
        }
        if(localStorage.getItem('bookingForm')){
            local = (JSON.parse(localStorage.getItem('bookingForm')))
            console.log(JSON.parse(localStorage.getItem('bookingForm')))
            this.setState({
                note: local.note,
                startTime: (local.start || null),
                endTime: (local.end || null),
                //date: local.date this needs to be in the same format as moment() would return... dont know what property date picker reads from.
            })
        }
    }
 
  handleDateChange = (date) => { //triggered when calender is used.
    this.setState({ date }, () => { console.log('The Date is: ', (this.state.date).format('YYYYMMDD')) }) 
    local['date'] = { _d: this.state.date}
    localStorage.setItem('bookingForm', JSON.stringify(local))
  }

  handleStartTimeChange = (startTime) => { //triggered when start time is edited
     this.setState({ startTime, bookingButton: false }, () => { console.log('Start time is: ', this.state.startTime) })
     local['start'] = startTime
     localStorage.setItem('bookingForm', JSON.stringify(local))
  }

  handleEndTimeChange = (endTime) => { //triggered when end time is edited
    this.setState({ endTime,  bookingButton: false  }, () => { console.log('End time is: ', this.state.endTime) })
    local['end'] = endTime
    localStorage.setItem('bookingForm', JSON.stringify(local))
  }

  handleNote = (e) => {
      let note = e.target.value
      this.setState({ note })
      local['note'] = this.state.note
      localStorage.setItem('bookingForm', JSON.stringify(local))
  } 

  handleBookingRequest = () => { //puts state into an object, with date formatted, and in 24hr time
    if(localStorage.getItem('token')){
        this.setState({sent: "sending"})
        let booking = { // this is whats sent to the server.
            date: this.state.date.format('MM/DD/YYYY'),
            startTime: this.timeConverter(this.state.startTime),
            endTime: this.timeConverter(this.state.endTime),
            clientId: this.state.userID,
            info: this.state.note,
            bookingStatus: "pending"
        }
        api.post("/bookings/new", booking)
            .then(() => {this.setState({sent: "sent!", bookingButton: true, isAuthenticated: true}) })//redirects if successful( is Authenticated )
            .catch((err) => { console.log(err) })
        localStorage.removeItem('bookingForm')
    } else {
        this.setState({error: "you must log in to make a request"})
    }
  }

  timeConverter = (time) => { //when start time is changed, the end time field value will change to 30mins later then the start time.
    let single = (time/3600)
    if((single % 1) !== 0){
        single -= .5
       return single += ":30"
    }
    return single + ":00"
  }

  render() {
    const { note, error, sent, startTime, endTime, bookingButton, isAuthenticated } = this.state
        if (isAuthenticated) {
            return <Redirect to='/profile' />
        }
    return (
        <BookingForm className="Makebooking-container">
            <MuiThemeProvider>
                <Title> Make a Booking Request </Title>
                <Subtitle>  with Michael Waye </Subtitle>
                <div className= "Makebooking--whatDate">
                    <Question>What day?</Question>
                    <DatePicker //calender.
                        className= "Makebooking--datePicker"
                        selected= {this.state.date}
                        onChange={this.handleDateChange}
                    />
                </div>
                <div className="Makebooking--whatTime">
                    <Question>What time?</Question>
                    <div>
                        <Text>Start:&nbsp;</Text> 
                        <TimePicker //start time
                            className= "Makebooking--timePicker"
                            start={"7:00"}
                            end="16:00" 
                            step={30} 
                            value={startTime }
                            onChange={this.handleStartTimeChange}
                        />
                    </div>
                    <Text>End:&nbsp;</Text> 
                    <TimePicker //end time
                        className= "Makebooking--timePicker"
                        start={ this.timeConverter(startTime) || "7:30" } 
                        end="17:00" 
                        step={30}
                        value={endTime} 
                        onChange={this.handleEndTimeChange}
                    />
                </div>
                <div className="Makebooking--note"> 
                    <TextField //note field
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
            </MuiThemeProvider>
        </ BookingForm>
    )
  }
}

export default MakeBooking;