import React from 'react'
import moment from 'moment'
import Booking from './Booking'
import Loading from './Loading'
import { api } from '../api/init';
import { Button } from '../styles/AllBookings.styles';


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

     isAdmin = () =>{
        const decoded = jwtDecode(localStorage.getItem('token'))
        return decoded.role === "admin" 
     }

    componentDidMount(){
        this.setState({loading: true})
        const decoded = jwtDecode(localStorage.getItem('token'))
        if( this.isAdmin()){
            this.getAdminBookings()
        }else{ this.getUserBookings(decoded.sub) }
    }

    getAdminBookings = () => {
        api.get("bookings")
        .then((response) => {
            console.table(response.data)
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

    checkBookingStatus = (booking) => {
        let bookingStatus = booking.bookingStatus
        this.setState({ [bookingStatus]: [...this.state[bookingStatus], booking] })
    }
        
    bookingSection = (bookingArr,admin) =>{
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
        const { loading, completed, declined, approved, pending, cancelled } = this.state
        const { bookingSection, isAdmin } = this
        return ( 
            <div className="allbookings"> 

            <Button onClick={() => this.toggleShow("pending")}> Pending </Button>
            <Button onClick={() => this.toggleShow("approved")}> Approved </Button>
            <Button onClick={() => this.toggleShow("cancelled")}> Cancelled </Button>
            <Button onClick={() => this.toggleShow("completed")}> Completed </Button>
            
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