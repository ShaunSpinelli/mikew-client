import React from 'react'

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