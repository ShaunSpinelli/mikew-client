import React from 'react'

//this component is rendered in Testimonies, making it easier to edit the view of each Testimony.
const TestimonieSingle = (props) => {
    return ( 
        <div>
            <div className="card">
                <img className="testimonie--image" src= {props.image} />
                <p className="tesimonie--description"> {props.testimonie} </p>
            </div>
        </div>
     )
}
 
export default TestimonieSingle;