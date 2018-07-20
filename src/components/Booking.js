import React from 'react';

const Booking = (props) => {
    return ( 
        <div key = {props._id}> 
            <p> Date: {props.date} Starts: {props.startTime} Ends: {props.endTime} Booking status: {props.bookingStatus} <Note: {props.info} </p>
         </div>
     )
}
 
export default Booking;