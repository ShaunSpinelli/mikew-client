import React from 'react';

class Contact extends React.Component{

    contactRequest = () => {
        console.log('hello')
    }

    render(){
        return(
        <div className = "contact">
            <p> Contact Mike  </p>
            <input name="fname" placeholder = "firstname" />
            <input name="lname" placeholder = "lastname" />
            <input name="phone" placeholder = "phone" />
            <input name="email" placeholder = "email" />
            <input name="artist" placeholder = "artist/band name" />
            <input name="comment" placeholder = "What would you like to talk about?" />
            <button onClick={this.contactRequest}> send </button>
        </div>
        )
    }
}
 
export default Contact;