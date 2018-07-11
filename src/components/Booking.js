import React from 'react';

const Booking = (props) => {
    return ( 
        <div key={booking._id}> 
            <h3> date: {props.date}{moment(booking.date, 'YYYYMMDD').format('MMM Do YY')  /* reformats into a more readable date. */} </h3> 
            <p> starts: {props.startTime}{booking.startTime} </p>
            <p> ends: {props.endTime} </p>
            <p> booking status: {props.bookingStatus} </p>
            <p> note: {props.info} </p>
        </div>
     )
}
 
export default Booking;