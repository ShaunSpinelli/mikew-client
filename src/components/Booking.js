import React from 'react';

const Booking = (props) => {
    return (   //formating for single bookings, to be used in AllBookings component.
         <div>
             <div className="contact" key = {props._id}>  
                <h1> Date: {props.date} </h1>
                <p> Start Time: {props.startTime} </p>
                <p> End Time: {props.endTime} </p>
                <p> Status: {props.bookingStatus} </p>
                <p> Note: {props.info} </p>
            </div>
         </div>
     )
}
 
export default Booking;