import React from 'react';

const Booking = (props) => {
    return ( 
        <div key = {props._id}> 
            <h3> Date: {props.date} </h3> 
            <p> Starts: {props.startTime} </p>
            <p> Ends: {props.endTime} </p>
            <p> Booking status: {props.bookingStatus} </p>
            <p> Note: {props.info} </p>
         </div>
     )
}
 
export default Booking;